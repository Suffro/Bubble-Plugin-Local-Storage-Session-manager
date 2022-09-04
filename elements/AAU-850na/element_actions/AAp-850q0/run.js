function(instance, properties, context) {
	try{
        
      //Load any data 

        let key = properties.key;

      //Do the operation
        
        instance.publishState('local_storage_value', localStorage.getItem(key));
        
    } catch (error) {
        console.error(error);
    }
}