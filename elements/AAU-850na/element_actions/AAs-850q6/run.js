function(instance, properties, context) {
	try{
        
      //Load any data 

        let key = properties.key;

      //Do the operation
        
        localStorage.removeItem(key);
        
    } catch (error) {
        console.error(error);
    }
}