function(instance, properties, context) {
  	//Do the operation
	localStorage.clear();

    // Trigger event
    instance.triggerEvent('local_storage_clear');
}