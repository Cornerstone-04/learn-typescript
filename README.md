# TypeScript Lesson

- TypeScript is JavaScript with syntax for types.
- It is a strongly typed language that builds on JavaScript providing better tooling.
- `tsc --init` is used to initialise a config file for TS settings.
- `tsc -w` is used to compile and watch for changes.

## Terminologies

- Strongly-typed: this demands the specification of data types.
- Inference: TS infers (specifies/suggests) what type of data is defined.
- Statically-typed: data typing is checked at compile time.

## Benefits

- Catch errors during development.
- Self documenting.

## Explicit declaration

- Declare a type with format "dataname: datatype"

```Typescript
    let myName: string = "Cornerstone";
```

## Implicit declaration

- Implicit declaration is when TS infers the type of data.

```Typescript
    let myName = "Cornerstone"
    // here typescript will assume that this is a string since it's initial value is a string.
```

## Types

- `string`
- `number`
- `boolean`
- `any` : _This defeats strong typing and allowss any data type_
- `union`: this specifies that a variable may contain different types
- `RegExp`: for regex

```Typescript
    let myName: string = "Ephraim";
    let meaningOfLife: number;
    let isLoading: boolean;
    let album: any;
    let anew: string | number;
    let regex: RegExp = /\w+/g;


    myName = "Cornerstome";
    meaningOfLife = 20;
    isLoading = true;
    album = 1984; //any data type goes

    const sum = (a: number, b: number) => {
        return a + b;
    };
```
