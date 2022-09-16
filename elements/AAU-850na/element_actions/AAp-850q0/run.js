function(instance, properties, context) {
    //Load any data 
    let key = properties.key;

    //Do the operation
    instance.publishState('local_storage_value', localStorage.getItem(key));

    // Trigger event
    instance.triggerEvent('local_storage_read');
}