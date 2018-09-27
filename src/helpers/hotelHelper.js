
export function removeDuplicates(data){
    return data.filter(function(item, pos) {
        return data.indexOf(item) == pos;
    })
}