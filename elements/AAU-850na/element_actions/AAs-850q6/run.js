function(instance, properties, context) {       
    //Load any data 
    let key = properties.key;

    //Do the operation    
    localStorage.removeItem(key);

    // Trigger event
    instance.triggerEvent('local_storage_remove');
}