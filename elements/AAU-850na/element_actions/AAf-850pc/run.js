function(instance, properties, context) {
	try{
        
      //Load any data 

        let key = properties.key;
        let value = properties.value;

      //Do the operation

        sessionStorage.setItem(key, value);
        
    } catch (error) {
        console.error(error);
    }
}