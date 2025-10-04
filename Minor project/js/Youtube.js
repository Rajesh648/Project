// Insert your YouTube API Key here
const apiKey = 'YOUR_YOUTUBE_API_KEY';
const channelId = 'UCXXXXXXXXX'; // Replace with the YouTube channel ID (optional)
const maxResults = 4;

function loadYouTubeVideos() {
    $.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&maxResults=${maxResults}`, function(data) {
        let html = '';
        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const title = item.snippet.title;
            const thumbnail = item.snippet.thumbnails.medium.url;

            html += `
            <div class="testimonial-item text-center">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                <div class="testimonial-text bg-light text-center p-4">
                    <p class="mb-0">${title}</p>
                </div>
            </div>`;
        });
        $(".testimonial-carousel").trigger('replace.owl.carousel', html).trigger('refresh.owl.carousel');
    });
}

// Call after document ready
$(document).ready(function () {
    loadYouTubeVideos();
});


// for Highlight scroll
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});
