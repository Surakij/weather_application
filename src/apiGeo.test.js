import {getCity} from "./apiGeo.js";


describe('getCity', () => {

    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({city: 'Yerevan'}),
    }))

    beforeEach(() => {
        fetch.mockClear();
    });

    test('test async function get city were you are currently living', async () => {
        const data = await getCity();
        expect(data).toEqual('Yerevan');
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test('test async func with fail request', async () =>{
        fetch.mockImplementationOnce(() => Promise.reject("API is down"));
        const data = await getCity();
        expect(data).toEqual(null);
        expect(fetch).toHaveBeenCalledWith('https://get.geojs.io/v1/ip/geo.json');
    })

})