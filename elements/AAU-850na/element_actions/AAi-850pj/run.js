function(instance, properties, context) {
    //Load any data 
    let key = properties.key;
    let value = properties.value;

    //Do the operation
    localStorage.setItem(key, value);
    
    // Trigger event
    instance.triggerEvent('local_storage_write');
}