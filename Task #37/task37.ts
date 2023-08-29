//  Large Shirts: Modify the make_shirt() function so that shirts are large by default
// with a message that reads I love TypeScript. Make a large shirt and a medium shirt
// with the default message, and a shirt of any size with a different message.

// Making a funtion for large shirt
function make_shirt(size = 'large', message = 'I love TypeScript') 
{
    console.log(`This is a ${size} shirt with the message: "${message}"`);
}

// Creating a large shirt with the default message
make_shirt();

// Creating a medium shirt with the default message
make_shirt('medium');

// Creating a shirt of any size, with a different message
make_shirt('small', 'Typescript is a Superset of Javascript');
