function(instance, properties, context) {    
    //Load any data 
    let key = properties.key;
    let value = properties.value;

    //Do the operation
    sessionStorage.setItem(key, value);
        
    // Trigger event
    instance.triggerEvent('session_storage_write');
}