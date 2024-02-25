 // JavaScript code to handle dropdown animation and list generation
 $(document).ready(function () {
    $(".show-tracks").click(function () {
        var album = $(this).data("album");
        var list = $(this).siblings(".tracks-list");

        if (list.is(":hidden")) {
            // Hide all other lists
            $(".tracks-list").slideUp();
            // Show the loading spinner
            list.html('<li class="list-group-item">Loading...</li>');
            // Fetch and populate list data here (you can use AJAX to fetch data from server)
            // For demonstration purposes, I'll just add some static items
            switch (album) {
                case 'Illmatic':
                    list.html(`
                        <li class="list-group-item">The Genesis</li>
                        <li class="list-group-item">N.Y. State of Mind</li>
                        <li class="list-group-item">Life's a Bitch</li>
                        <li class="list-group-item">The World Is Yours</li>
                        <li class="list-group-item">Halftime</li>
                        <li class="list-group-item">Memory Lane (Sittin' in da Park)</li>
                        <li class="list-group-item">One Love</li>
                        <li class="list-group-item">One Time 4 Your Mind</li>
                        <li class="list-group-item">Represent</li>
                        <li class="list-group-item">It Ain't Hard to Tell</li>
                    `);
                    break;
                case 'Ready to Die':
                    list.html(`
                        <li class="list-group-item">Intro</li>
                        <li class="list-group-item">Things Done Changed</li>
                        <li class="list-group-item">Gimme the Loot</li>
                        <li class="list-group-item">Machine Gun Funk</li>
                        <li class="list-group-item">Warning</li>
                        <li class="list-group-item">Ready to Die</li>
                        <!-- Add more items as needed -->
                    `);
                    break;
                case 'The Chronic':
                    list.html(`
                        <li class="list-group-item">The Chronic (Intro)</li>
                        <li class="list-group-item">Fuck wit Dre Day (And Everybody's Celebratin')</li>
                        <li class="list-group-item">Let Me Ride</li>
                        <li class="list-group-item">The Day the Niggaz Took Over</li>
                        <li class="list-group-item">Nuthin' but a "G" Thang</li>
                        <li class="list-group-item">Deeez Nuuuts</li>
                        <!-- Add more items as needed -->
                    `);
                    break;
                // Add cases for other albums
            }
            // Show the list with animation
            list.slideDown();
        } else {
            // Hide the list with animation
            list.slideUp();
        }
    });
});