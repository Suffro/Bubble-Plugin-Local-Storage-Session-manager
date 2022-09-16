function(instance, properties, context) {    
    //Load any data 
    let key = properties.key;

    //Do the operation
    sessionStorage.removeItem(key);

    // Trigger event
    instance.triggerEvent('session_storage_remove');
}