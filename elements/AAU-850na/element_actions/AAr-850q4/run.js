function(instance, properties, context) {
	try{
        
      //Load any data 

        let key = properties.key;

      //Do the operation
        
        sessionStorage.removeItem(key);
        
    } catch (error) {
        console.error(error);
    }
}