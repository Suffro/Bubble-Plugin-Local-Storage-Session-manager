function(instance, properties, context) {
	try{
        
      //Load any data 

        let key = properties.key;

      //Do the operation
        
        instance.publishState('local_storage_value', sessionStorage.getItem(key));
        
    } catch (error) {
        console.error(error);
    }
}