function merge(array1,array2){
    let sorted=[];
    let size1=array1.length;
    let size2=array2.length;
    if(!size1){
        return array2;
    }
    else if(!size2){
        return array1;
    }

    let loc1=0;
    let loc2=0;
    while(loc1<size1 || loc2 < size2){
        if(loc1===size1){
            let remainder=array2.slice(loc2);
            return [...sorted,...remainder];
        }
        else if(loc2 === size2){
            let remainder = array1.slice(loc1);
            return [...sorted,...remainder];
        }
        else{
            if(array1[loc1] < array2[loc2]){
                sorted=[...sorted,array1[loc1]];
                loc1++;
            }
            else{
                sorted=[...sorted,array2[loc2]];
                loc2++
            }
        }
    }

    return sorted;

    
}

function sort(data){
    // trivial solution
    if (data.length <=1 ){
        return data
    }
    let middle = Math.floor(data.length/2);
    let left=data.slice(0,middle);
    let right=data.slice(middle);

    let leftsort=sort(left);
    let rightsort=sort(right);

    return merge(leftsort,rightsort)
}


//let b=[6,3,5,1,9,1];
//console.log(sort(b))
