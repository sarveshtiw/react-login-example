export const styles = {
    removePadding: {
        padding: '0px !important',
        fontSize:'none'
    },
    searchWidth:{
        padding: '0px !important'
    },
    fontSize_def:{
        fontSize:'13px'
    }
}

for(let i=10; i<=100; i++)
{
    styles[i] ={
        fontSize:`${i}px`
    }
}