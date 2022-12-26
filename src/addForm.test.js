import {createForm} from "./addForm.js";

describe('createForm', () => {
    let list;
    let body;
    let form;


    beforeEach(() => {
        list = '';
        body = document.createElement("body");
        form = createForm(list);
        body.append(form)

    })

    function inputValue(text) {
        body.querySelector("input").value = text;
        body.querySelector("button").click();
    }

    test("is a function", () => {
        expect(createForm).toBeInstanceOf(Function);
    });

    test('create basic markup', () => {
        expect(body.querySelector('form')).toBeTruthy();
        expect(body.querySelector('input')).toBeTruthy();
        expect(body.querySelector('button')).toBeTruthy();
        expect(body.querySelector('button').innerHTML).toEqual('Click me');
        expect(body.querySelector('ul')).toBeTruthy();
        expect(body.querySelectorAll('li').length).toBe(0)

    });

    test('add new li by click button', () => {
        const value = 'Omsk';
        let ul = body.querySelector('ul');
        inputValue(value);


        expect(ul.querySelectorAll("li").length).toBe(1);
        expect(ul.querySelectorAll("li")[0].innerText).toBe(value);
    })

    test("remove first li when ul length is over 10 in the list", () => {
        let ul = body.querySelector('ul');
        const textValue = [
            "Мурманск",
            "Москва",
            "Омск",
            "Химки",
            'Анапа',
            'Крым',
            'Киев',
            'Минск',
            'Ереван',
            'Алматы',
            'Одесса'
        ];
        for (let i = 0; i < textValue.length; i++) {
            inputValue(textValue[i]);
        }
        expect(ul.querySelectorAll("li").length).toBe(10);
    })

})