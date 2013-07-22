'use strict';
describe('File Search Functionality',function(){
	it('Current Location of Url should be index.html#/Search',function(){
		browser().navigateTo('../../app/index.html');
		expect(browser().location().url()).toBe('/search');
	});
	describe('Search view',function(){
		beforeEach(function(){
			browser().navigateTo('../../app/index.html#/Search');		
		});

		it('Initial Total Number Of Records',function(){
			expect(repeater('li').count()).toBe(9);
		});
		it('Should be fetching only the specified record',function(){
			input('query').enter('News');
			expect(repeater('li').count()).toBe(1);
		});
		it('Record displayed should be equal to the matching string',function(){
			input('query').enter('Sports'); 
			expect(repeater('li', 'Search List').column('document.documentName')).
          	toEqual(["Sports.txt"]);
		});
		it('Details of the Document should be displayed when Selected From the List',function(){
			input('query').enter('News');
			element('li a').click();
			expect(element('iframe').attr('src')).toBe('data/News.txt');
		});
	});
});