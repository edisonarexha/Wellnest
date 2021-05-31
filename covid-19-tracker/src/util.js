export const sortData=(data) => {
    const sortedData = [...data];
    sortedData.sort((a, b) =>{
        if(a.cases>b.cases){
            return -1;//reason -1 stands for false., thats why we use it , if we use false wont work.
        }else{
            return 1;
        }
    })
    return sortedData;
}