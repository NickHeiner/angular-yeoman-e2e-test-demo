'use strict';

describe('PhoneCat App', function() {

    it('does not redirect', function() {
        browser().navigateTo('/');
        expect(browser().location().url()).toBe('/');
    });
});