function(instance, properties, context) {
    //Do the operation
    sessionStorage.clear();
    
    // Trigger event
    instance.triggerEvent('session_storage_clear');
}