import {createForm} from "./addForm.js";

describe('createForm', () => {
    let list;
    let body;
    let form;


    beforeEach(() => {
        list = '';
        body = document.createElement("body");
        form = createForm(list);
        body.append(form);

    })


    // function inputValue(text) {
    //     body.querySelector("input").value = text;
    //     body.querySelector("button").click();
    // }


    test("is a function", () => {
        expect(createForm).toBeInstanceOf(Function);
    });

    test('create basic markup', () => {
        expect(body.querySelector('form')).toBeTruthy();
        expect(body.querySelector('input')).toBeTruthy();
        expect(body.querySelector('button')).toBeTruthy();
        expect(body.querySelector('button').innerHTML).toEqual('search');
        expect(body.querySelector('ul')).toBeTruthy();
        expect(body.querySelectorAll('li').length).toBe(0);
    });

    test('testing adding city to the ul from localStorage', () => {

        const list = '<li>Moscow</li>';
        form = createForm(list);
        body.append(form);
        expect(body.querySelectorAll('li').length).toBe(1);
        expect(body.querySelector('li').innerHTML).toEqual('Moscow');
    })
})