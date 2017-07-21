export default {
    getItem(key) {
        let value
        try {
            value = localStorage.getItem(key)
        } catch (ex) {
            //开发模式下提示error
            if (__DEV__) {
                console.error(ex.message)
            }
        } finally {
            return value
        }
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value)
        } catch (ex) {
            if (__DEV__) {
                console.error(ex.message)
            }
        }
    }
}