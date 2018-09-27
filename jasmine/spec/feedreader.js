$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Created a test that loops through each feed
         * in the allFeeds object and ensuring that it has a URL defined
         * and that the URL is not empty.
         */

        it('URL - defined $ not empty', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeTruthy();
            }
        });

        /* Created a test that loops through each feed
         * in the allFeeds object and ensuring that it has a name defined
         * and that the name is not empty.
         */
        it('NAME - defined $ not empty', function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeTruthy();
            }
        });
    });

    /* Created a new test suite named "The menu" */

    describe('The menu', function () {

        /* Created a test that ensures the menu element is
         * hidden by default by analyzing the HTML and
         * the CSS to determine the performance of
         * hiding/showing of the menu element.
         */

        it('menu-hidden by default', function () {
            const x = document.querySelector('body');
            expect(x.className).toBe('menu-hidden');
        });

        /* Created a test that ensures that menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: whether the menu is displayed
          * or hidden during click event.
          */

        it('visibility of menu-icon', function () {
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(false);
            $('a.menu-icon-link').trigger('click');
            expect($('.menu-hidden').is(':visible')).toBe(true);
        });
    });

    /* Created a new test suite named "Initial Entries" */

    describe('Initial entries', function () {
        /* Created a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
    *  loadFeed() is asynchronous hence this test uses
      * Jasmine's beforeEach and asynchronous done() function.
       */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('check whether the entries are greater than 0', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });
    /* Created a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {
        let testfeed;

        /* Created a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        beforeEach(function (done) {
            loadFeed(0, function () {
                testfeed = $('.feed').html();
                loadFeed(1, done);
            });

        });

        it('new feed has loaded', function () {
            expect($('.feed').html()).not.toEqual(testfeed);
        });
    });
}());
