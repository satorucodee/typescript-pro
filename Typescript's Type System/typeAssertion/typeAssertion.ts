interface Foo {
	bar: number;
	bas: string;
}

var foo = {} as Foo;
foo.bar = 123;
foo.bas = "hello";


// Double Assertion
function handler (event:Event){
    let mouseEvent = event as HTMLElement;
}

// do this
function handlerr(event:Event){
    let mouseEvent = event as any as HTMLElement;
}
