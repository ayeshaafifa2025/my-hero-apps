const getStoredApp =()=>{
const storedAppSTR = localStorage.getItem("installation");

if(storedAppSTR){
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
}
else{
    return [];
}
}

const removeFromStoredDb = (id) => {
    const stored = getStoredApp();
    const remaining = stored.filter(appId => appId !== id);
    localStorage.setItem("installation", JSON.stringify(remaining));
};

const addToStoredDb =(id)=>{
    const storedAppData= getStoredApp();
    if(storedAppData.includes(id)){
        console.log('hello')
        alert(' ID already exist')

    }
    else{
        storedAppData.push(id);
        console.log(storedAppData)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("installation",data)
    }

}

export {addToStoredDb,getStoredApp,removeFromStoredDb};



