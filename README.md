getbypath
=========

Get data from a JSON object by path.

## Install

    npm install getbypath

## Usage

    var getByPath = require('getbypath');
    var obj = { foo: { bar: { baz: 'thedata', biz: ['one', 'two'] }}};
    var bar = getByPath(obj, 'foo.bar.baz');

    console.log(bar);
    console.log(getByPath(obj, 'foo.bar'));
    console.log(getByPath(obj, 'foo.bar.biz'));

    //produces the following output
    thedata
    { baz: 'thedata', biz: [ 'one', 'two' ] }
    [ 'one', 'two' ]

    // use getByPath with a third argument true to create path
    var newPath = getByPath(obj, 'my.newPath', true);

    console.log(newPath); // {}
    console.log(obj);

    /*
    {
        foo: {
            bar: {
                baz: 'thedata',
                biz: ['one', 'two']
            }
        },
        my: {
            newPath: {}
        }
    }
    */

## Tests

Install devDependencies

    npm install

Run tests

    npm test
