
export function removeDuplicates(data){
    return data.filter(function(item, pos) {
        return data.indexOf(item) == pos;
    })
}

export function orderData(order, data){
    switch(order){
        case "asc":
            return data.sort((a, b) => a.starRating - b.starRating);
        case "desc":
            return data.sort((a, b) => b.starRating - a.starRating);
        default:
            return data;
      }
}