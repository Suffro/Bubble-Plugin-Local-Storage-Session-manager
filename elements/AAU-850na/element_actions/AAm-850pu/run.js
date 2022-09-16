function(instance, properties, context) {
 
    //Load any data 
    let key = properties.key;

    //Do the operation
    instance.publishState('session_storage_value', sessionStorage.getItem(key));
    
    // Trigger event
    instance.triggerEvent('session_storage_read');
}