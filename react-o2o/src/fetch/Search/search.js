import { get } from '../get'

export function getSearchData(city,page){
    const result = get('/api/homelist/'+encodeURIComponent(city)+'/'+page)
    return result
}