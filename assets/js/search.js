
var documents = [{
    "id": 0,
    "url": "https://stephen-hucker.github.io/ORIGINAL%20FILES/2020-01-14-test-markdown-post.txt",
    "title": "",
    "body": "Example Markdown PostBasic setup: Jekyll requires blog post files to be named according to the following format: YEAR-MONTH-DAY-filename. md Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and filename is whatever file name you choose, to remind yourself what this post is about. . md is the file extension for markdown files. The first line of the file should start with a single hash character, then a space, then your title. This is how you create a “level 1 heading” in markdown. Then you can create level 2, 3, etc headings as you wish but repeating the hash character, such as you see in the line ## File names above. Basic formatting: You can use italics, bold, code font text, and create links. Here’s a footnote 1. Here’s a horizontal rule: Lists: Here’s a list:  item 1 item 2And a numbered list:  item 1 item 2Boxes and stuff:  This is a quotation    You can include alert boxes…and…    You can include info boxesImages: Code: General preformatted text: # Do a thingdo_thing()Python code and output: # Prints '2'print(1+1)2Tables:       Column 1   Column 2         A thing   Another thing   Tweetcards: Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019Footnotes:       This is the footnote.  &#8617;    "
    }, {
    "id": 1,
    "url": "https://stephen-hucker.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 2,
    "url": "https://stephen-hucker.github.io/about/",
    "title": "About Stephen",
    "body": "My name is Stephen Hucker. This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 3,
    "url": "https://stephen-hucker.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 4,
    "url": "https://stephen-hucker.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 5,
    "url": "https://stephen-hucker.github.io/bikes/markdown/2020/02/28/gt-zaskar-expert.html",
    "title": "GT 2009 Zaskar Expert",
    "body": "2020/02/28 - I purchased a new bike on Dec 7, 2009, I went a little over budget so I walked into the city (8km), picked it up and was riding home and I got a bloody nail through the tyre, so another 4 km walking :-( So far, I like it. It is very responsive, easy to accelerate. My goal with the bike is to lose 20kg over the Australian summer and build a good physical base.  ![GT 2009 Zaskar Expert](/img/GT-Zaskar-Expert-2009. jpg)Marketing Drivel: This bike screams “big fun” to XC hardcore racers. Hydroformed Kinesis aluminum frame with a stiff rear triangle excels at fast, technical hill climbs while remaining extremely lightweight and responsive, perfect for YOUR next XC race.  Hydroformed Kinesis Superlight custom aluminum tubeset delivers nearly “weightless” performance and is highly responsive on technical climbs Rock Shox Recon Race fork with 100mm of travel gives you smooth, predictable and reliable bump absorption over uneven terrain Shimano SLX 27-speed drivetrain with triple cranks provide sharp, powerful shifts and include plenty of gears for the hills and flats Shimano SLX triggers offer fast and quick shifting action Ritchey aluminum handlebar, stem and seatpost for core-level strength, style and performance Shimano SLX hydraulic disc brakes supply rapid and controlled stopping power in any condition Crank Brothers Candy C pedals add stability and easy in/easy out convenience Lightweight and low rolling Kenda Karma tires combined with Mavic Crossride Center-Lock Disc wheels deliver tough and predictable handling on your favorite XC trailsSPECIFICATIONS:                     Handlebar   Ritchey Pro butted 2014 alum, Flat, 31. 8 mm clamp, 680 mm width       Brake   Shimano SLX Hydraulic       Levers                       Rear Brake   Shimano SLX Hydraulic       Tires   Front/Rear 26”x 2. 0 Kenda Karma 120 TPI with kevlar bead       Front Brake   Shimano SLX Hydraulic       Chainrings   34/50t       Nipples   Mavic brass self locking       Spokes   Mavic, straight pull bladed spokes       Cog set   Shimano SLX 9-speed, 11-32       Rear Hub   Mavic CrossRide disc       Front Hub   Mavic CrossRide Disc       Chain   Shimano Nine Speed                   Rims   Mavic CrossRide Disc for Centerlock, with straight pull bladed spokes, QRM sealed bearing hubs, 24 holes front and rear                   Shifters   Shimano SLX nine speed       Rear Derailleur   Shimano SLX shadow       Front Derailleur   Shimano SLX       Pedals   Shimano PDM-520                   Crankset /   Shimano SLX, with Hollowtech 2 piece arm and bb       Chainwheel                                   Fork   Rock Shox RECON RACE, 100mm of travel, 7050 al steerer, Air sprung with rebound damping and motion control                   Frame   GT design hydroformed Kinesis Superlight custom tube-set Machined Head tube, disc compatible       Stem   Ritchey 6061 cold forged stem, with 6 degree rise, and 4 bolt face plate       Headset   FSA Integrated, sealed angular contact bearing       GRIPS   GT Lock Down       SADDLE   FIZIK Gobi XM with Manganese Rails       Seat Post   Ritchey 27. 2mm 3 D forged       Seat Clamp   GT Alum QR               GEOMETRY:                     Frame Size:   L       Head Tube Angle:   71       Seat Angle:   73. 0       Chainstay Length:   419. 0 mm       Standover Height:   777. 9 mm       Horiz. Top Tube Length:   619. 68 mm       Seat Tube Length:   130 mm       Head Tube Length:   305 mm       Bottom Bracket Height:   39 mm       Fork Offset:   473 mm       Wheelbase:           Fork Length:       "
    }, {
    "id": 6,
    "url": "https://stephen-hucker.github.io/fastpages/jupyter/2020/02/20/test.html",
    "title": "Fastpages Notebook Blog Post",
    "body": "2020/02/20 -           About&#182;This notebook is a demonstration of some of capabilities of fastpages with notebooks. With fastpages you can save your jupyter notebooks into the _notebooks folder at the root of your repository, and they will be automatically be converted to Jekyll compliant blog posts! Front Matter&#182;: Front Matter is a markdown cell at the beginning of your notebook that allows you to inject metadata into your notebook. For example: Setting toc: true will automatically generate a table of contentsSetting badges: true will automatically include GitHub and Google Colab links to your notebook. Setting comments: true will enable commenting on your blog post, powered by utterances. More details and options for front matter can be viewed on the front matter section of the README. Markdown Shortcuts&#182;: put a #hide flag at the top of any cell you want to completely hide in the docs put a #collapse-hide flag at the top of any cell if you want to hide that cell by default, but give the reader the option to show it:              #collapse-hideimport pandas as pdimport altair as alt       put a #collapse-show flag at the top of any cell if you want to show that cell by default, but give the reader the option to hide it:              #collapse-showcars = &#39;https://vega. github. io/vega-datasets/data/cars. json&#39;movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;sp500 = &#39;https://vega. github. io/vega-datasets/data/sp500. csv&#39;stocks = &#39;https://vega. github. io/vega-datasets/data/stocks. csv&#39;flights = &#39;https://vega. github. io/vega-datasets/data/flights-5k. json&#39;       Interactive Charts With Altair&#182;: Charts made with Altair remain interactive.  Example charts taken from this repo, specifically this notebook. Example 1: DropDown&#182;:       # single-value selection over [Major_Genre, MPAA_Rating] pairs# use specific hard-wired values as the initial selected valuesselection = alt. selection_single(  name=&#39;Select&#39;,  fields=[&#39;Major_Genre&#39;, &#39;MPAA_Rating&#39;],  init={&#39;Major_Genre&#39;: &#39;Drama&#39;, &#39;MPAA_Rating&#39;: &#39;R&#39;},  bind={&#39;Major_Genre&#39;: alt. binding_select(options=genres), &#39;MPAA_Rating&#39;: alt. binding_radio(options=mpaa)}) # scatter plot, modify opacity based on selectionalt. Chart(movies). mark_circle(). add_selection(  selection). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=&#39;IMDB_Rating:Q&#39;,  tooltip=&#39;Title:N&#39;,  opacity=alt. condition(selection, alt. value(0. 75), alt. value(0. 05)))    Example 2: Tooltips&#182;:       alt. Chart(movies). mark_circle(). add_selection(  alt. selection_interval(bind=&#39;scales&#39;, encodings=[&#39;x&#39;])). encode(  x=&#39;Rotten_Tomatoes_Rating:Q&#39;,  y=alt. Y(&#39;IMDB_Rating:Q&#39;, axis=alt. Axis(minExtent=30)), # use min extent to stabilize axis title placement  tooltip=[&#39;Title:N&#39;, &#39;Release_Date:N&#39;, &#39;IMDB_Rating:Q&#39;, &#39;Rotten_Tomatoes_Rating:Q&#39;]). properties(  width=600,  height=400)    Example 3: More Tooltips&#182;:       # select a point for which to provide details-on-demandlabel = alt. selection_single(  encodings=[&#39;x&#39;], # limit selection to x-axis value  on=&#39;mouseover&#39;, # select on mouseover events  nearest=True,  # select data point nearest the cursor  empty=&#39;none&#39;   # empty selection includes no data points)# define our base line chart of stock pricesbase = alt. Chart(). mark_line(). encode(  alt. X(&#39;date:T&#39;),  alt. Y(&#39;price:Q&#39;, scale=alt. Scale(type=&#39;log&#39;)),  alt. Color(&#39;symbol:N&#39;))alt. layer(  base, # base line chart    # add a rule mark to serve as a guide line  alt. Chart(). mark_rule(color=&#39;#aaa&#39;). encode(    x=&#39;date:T&#39;  ). transform_filter(label),    # add circle marks for selected time points, hide unselected points  base. mark_circle(). encode(    opacity=alt. condition(label, alt. value(1), alt. value(0))  ). add_selection(label),  # add white stroked text to provide a legible background for labels  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5, stroke=&#39;white&#39;, strokeWidth=2). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),  # add text labels for stock prices  base. mark_text(align=&#39;left&#39;, dx=5, dy=-5). encode(    text=&#39;price:Q&#39;  ). transform_filter(label),    data=stocks). properties(  width=700,  height=400)    Data Tables&#182;: You can display tables per the usual way in your blog:       movies = &#39;https://vega. github. io/vega-datasets/data/movies. json&#39;df = pd. read_json(movies)# display table with pandasdf[[&#39;Title&#39;, &#39;Worldwide_Gross&#39;,   &#39;Production_Budget&#39;, &#39;IMDB_Rating&#39;]]. head()           Title   Worldwide_Gross   Production_Budget   IMDB_Rating         0   The Land Girls   146083. 0   8000000. 0   6. 1       1   First Love, Last Rites   10876. 0   300000. 0   6. 9       2   I Married a Strange Person   203134. 0   250000. 0   6. 8       3   Let's Talk About Sex   373615. 0   300000. 0   NaN       4   Slam   1087521. 0   1000000. 0   3. 4     Images&#182;: Local Images&#182;: You can reference local images and they will be copied and rendered on your blog automatically.  You can include these with the following markdown syntax: ![](my_icons/fastai_logo. png) Remote Images&#182;: Remote images can be included with the following markdown syntax: ![](https://image. flaticon. com/icons/svg/36/36686. svg) Animated Gifs&#182;: Animated Gifs work, too! ![](https://upload. wikimedia. org/wikipedia/commons/7/71/ChessPawnSpecialMoves. gif) Captions&#182;: You can include captions with markdown images like this: ![](https://www. fast. ai/images/fastai_paper/show_batch. png  Credit: https://www. fast. ai/2020/02/13/fastai-A-Layered-API-for-Deep-Learning/ ) Other Elements&#182;Tweetcards&#182;: Typing &gt; twitter: https://twitter. com/jakevdp/status/1204765621767901185?s=20 will render this:Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019 Youtube Videos&#182;: Typing &gt; youtube: https://youtu. be/XfoYk_Z5AkI will render this: Boxes / Callouts&#182;: Typing &gt; Warning: There will be no second warning! will render this:    Warning: There will be no second warning! Typing &gt; Important: Pay attention! It's important. will render this:    Important: Pay attention! It&#8217;s important. Typing &gt; Tip: This is my tip. will render this:    Tip: This is my tip. Typing &gt; Note: Take note of this. will render this:    Note: Take note of this. Typing &gt; Note: A doc link to [an example website: fast. ai](https://www. fast. ai/) should also work fine. will render in the docs:    Note: A doc link to an example website: fast. ai should also work fine. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}