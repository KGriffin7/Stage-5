function myFunction() {
    document.getElementById("title").innerHTML = "Welcome To My Notes";
    document.getElementById("content").innerHTML = "<h3>Click A Button When You're Ready</h3>";
}
function myFunction2() {
    document.getElementById("title").innerHTML = "<b>Section 1: Basics of the Web</b>";
    document.getElementById("content").innerHTML = "<h3>How The Web Works</h3>" +
    "The web is a collection of computer the communicate with each other to relay inormation. The computer uses <em>HTTP</em> to ask  <em>servers</em> for a particular webpage or <em>HTML Document</em>" + 
    "<h3>HTML</h3>" + 
    "<b>Html</b> is described a the 'the heart of the web.' Any and all webpages would not exist if not for HTML. HTML itself is made of <em>many</em> individual aspects to keep it together. The actual <b>text content</b> is what is seen and read on the webpage. The <b>markup</b> is how it is displayed on the webpage." + 
    "<h3>HTML Markup</h3>" + 
    "HTML markup is control by elements known as <em>tags</em> and <em>attributes</em>.<b>Tags</b> are used to alter the appearance of specific words or phrases. All tags are used in the middle of a 'less than sign' and a 'greater than sign'. To make a word <b>bold</b>, you would use the 'b' tag and to <em>italize</em>, the 'em' tag would be used.<b>Attributes</b> are complementary assets to some tags. An anchor tag, for example, would be accompanied by the attribute 'href', while 'src' or search would be used for an image or 'img' tag." + 
    "<h3>Span and Div</h3>" + 
    "Span</b> and <b>Div</b> are two classes that are used to contain a specific word or phrase. Div class is a <b>block</b> element, meaning it creates a 'box' around the specified word or phrase. Span is an <b>inline</b> element, similar to 'a','br','strong',etc.";
}
function myFunction3() {
    document.getElementById("title").innerHTML = "<b>Section 1.2: Getting Started</b>";
    document.getElementById("content").innerHTML = "<h3>Learning how to learn</h3>" + 
    "Learning how to do anything can be simplified into 4 relatively simple stages. The first stage would be <em>Ignorance</em> or 'Stage 0.' 0 is fitting for this stage because you know nothing at this stage. Stage 1 is the <em>Awareness</em> stage, which can be achieved by asking a simple question: What is that? Stage 2 is <em>Ability</em> which is just being able to do something at some level of competency. Stage 3 is <em>Fluency</em>, being able to do something in your sleep." + 
    "<h3>Leave Mastery to the Masters</h3>" + 
    "Fluency is not the current target, but it is still a goal. The current targets are Ability and Awareness. The reasoning is quite simple: the more you know about something and the more you do that, the quicker and easier it is to <em>master</em> it." + 
    "<h3>Understanding the Language</h3>" + 
    "<b>HTML</b> and <b>CSS</b> are both languages that can be looked at as two sides of the same coin. HTML and the tags inside of it control the structure of the page. The structure of the page is what tells the browser what the content is and how to display it: text, picture, tag, etc. It's done by connecting several different elements into a tree-like 'structure'. CSS controls the style of the page, or the way it looks. The definition of language in this sense is a combination of <b>syntax</b> and <b>rules</b>.";
}
function myFunction4() {
    document.getElementById("title").innerHTML = "<b>Section 1.3: CSS Code Style</b>";
    document.getElementById("content").innerHTML = "<h3>What not to do</h3>" + 
    "The first Section in using CSS is to avoid repetition! CSS standards for <b>Cascading Style Sheet</b>, which roughly translates to a sheet that takes the <em>most descriptive</em> rule that it is given and applies that rule to an html document. CSS sort of acts like a home decorator in a sense that it will customize the webpage to the specifications of the client." + 
    "<h3>How to use CSS</h3>" + 
    "<b>CSS can be used in a number of ways:</b><ol><li>Write it in to the initial HTML file through the in the head element,</li>           <li>Link it in as a separate file all together,</li>           <li>or Write it in the HTML with the corresponding element by inlining it, which is a bad idea, because it requires repetition for similar elements and that breaks Rule No. 1.</li></ol>";
}
function myFunction5() {
    document.getElementById("title").innerHTML = "<b>Section 2.1: Serious Programming</b>";
    document.getElementById("content").innerHTML = "<h3>Computer Science</h3>" + 
    "Computer science is problem solving, with computer. Specifically, how a computer solves a problem. Computers can do anything, as long as they have the proper <b>program (instructions)</b>, and a <b>precise sequence of steps</b> to tell the computer how to use those instructions. Once a computer receives those instructions, it <b>computes</b> the command and <b>executes</b> the programs." + 
    "<h3>Computer Languages</h3>" + 
    "Computers may display natural language, but they cannot run their programs on it. Natural languages have several <b>ambiguities</b>, which would confuse a computer and its programs. Therefore, computers have their own languages to run on known as <b>high-level language</b>. To translate the natural language that humans type into their computers, a computer <em>needs an interpreter program</em> to change the language to one the computer can understand without fault." + 
    "<h3>Python Program</h3>" + 
    "The <b>Python Program</b> is a computer program that runs as an interpreter. Python translates instructions given in a specific form known as the <b>Backus Naur Form</b>. The instructions can be given in sentence form: first Noun, then Verb and finally Object. <em>(Sentence = Subject->Verb->Object)</em>. Python runs on a <b>variable</b> system. Variables ,in python, are elements that can be use to assign a name a specific value. The assignemnt statement goes: Name = Expression." + 
    "<h3>Variables</h3>" + 
    "The variables in a python program are a way to give a name a value. To assign a value to a variable means that this variable is now a representation of the expression.</p>         <p> The value is assigned using the '='. '='' doesn't mean equal like it does in mathematics: In programming, '=' roughly means, 'This value is now represented by this variable.' '2+3=5' is an result of the 2 + 3, but 'my_variable=5' now means that ,in the program, my_variable has the value of 5. There are some specifics in dealing with variables: 2+2 and '2'+'2' result in two completely diffent results. 2+2 results in 4, because it's formatted as a math problem and is asking for addition. '2'+'2' asks what happens when you combine '2' and '2', not add them together, so the result is 22.";
}
function myFunction6() {
    document.getElementById("title").innerHTML = "<b>Section 2.3: Functions</b>";
    document.getElementById("content").innerHTML = "<h3>What are Functions</h3>" + 
    "<b>Functions</b> are programs given to the computer for it to execute. Functions require an <b>input</b>, meaning you give the function a value and an expression to compute, and the result is an <b>output</b>, or a result of the input.({function[(input),(input)]} would yeild an <em>output</em> using the keyword 'return')" + 
    "<h3>Making and using Functions</h3>" + 
    "To make or <b>define</b> a function, the code has to start with the keyword 'def'. The 'def' is then followed by a function name and its <b>parameters</b>. The parameters recieve an actual value further down the code, when the function is used. To use, or <b>call</b> a function is to give the parameters a value and run the function with those values." + 
    "<h3>Useful but Tricky</h3>" + 
    "Functions are a great tool because they help <em><b>avoid repititon</b></em>, which is a rule for programmers. Once the function is programmed, it never has to be re-programmed and can be used whenever it's needed. However, functions are still very specific and without the right components, the function is useless. An example is the 'return' part of the function. Without it, absolutely nothing happens. The result that shows up says 'None'.";
}
function myFunction7() {
    document.getElementById("title").innerHTML = "<b>Section 2.4-2.5: Flow, Loops, and Debugging</b>";
    document.getElementById("content").innerHTML = "<h3>IF and OR</h3>" + 
    "The <b>'IF'</b> statement is used to find a Boolean Value of the given expression, or simply wether the expression is <em>True</em> or <em>False</em> within a function. The same can be said for the <b>'OR'</b> statement, except the 'OR' statement can be easier to use by condensing the code." + 
    "<h3>Debugging</h3>" + 
    "<p>Bugs. Will. Happen. There are 5 ways to approach debugging a program, and anyone will do, it's just based on preference.</p>" + 
      "<ul>" +
          "<li>Examine the error messages</li>" +
          "<li>Use an example code as a reference</li>" +
          "<li>Make sure the examples actually work</li>" +
          "<li>Test print intermediate results</li>" +
          "<li>Keep old program attempts for comparison</li>" +
       "</ul>";
}
function myFunction8() {
    document.getElementById("title").innerHTML = "<b>Section 2.6: Structuring Data</b>";
    document.getElementById("content").innerHTML = "<h3>Different Ways to Structure</h3>" + 
    "The basics of structuring data in coding requires seSectionquencing, or just lining up different elements to work together. <b>Strings</b> are a sequence of chacters, something simple like 'apple' is a string. <b>Lists</b> are a sequence of anything: characters, integers, strings, and even other lists." + 
    "<h3>Altering the Lists</h3>" + 
    "Lists can be changed by changing what is in the actual Lists, but there are other eays to change the Lists as well.<b>Mutations</b> are a way to change a list by changing it's value after creating it." +
    "<ul>Ex://" +
        "<li>s = 'apple'</li>" +
        "<li>s = 'sn' + s</li>" +
        "<li>  = 'sn' + 'apple'</li>" +
        "<li>s = 'snapple'</li>" +
    "</ul>" + 
    "<ul>Ex://" +
        "if 'x' = apple = 'y',</li>" +
        "any changes that happens to 'x' also happens to y</li>" +
    "</ul>";
}
function myFunction9() {
    document.getElementById("title").innerHTML = "<b>Section 2.7: Problem Solving</b>";
    document.getElementById("content").innerHTML = "<h3>How to Solve Virtually Any Problem</h3>" + 
    "There is basically one step in solving problems or developing any type of code:" + 
    "<ul>" +
        "<li>STEP 1: Understand The Problem</li>" +
    "</ul>" + 
    "While it seems simple enough, this one step has many sub-steps or rules when it comes to coding. If all else fails, searching for an answer on a website is a great idea." + 
    "<ul>" +
          "<li>Rule 1: Ask 'what are the inputs?'</li>" +
          "<li>Rule 1.1: Don't Panic!</li>" +
          "<li>Rule 2: Ask 'What are the outputs?'</li>" +
          "<li>Rule 2.1: Try to Understand the Relations between Inputs and Outputs</li>" +
          "<li>Rule 3: Solve the Problem by working out some examples</li>" +
          "<li>Rule 4: Simple Mechanical Solutions are Ideal</li>" +
          "<li>Rule 5: Work and Develop in small steps and with various tests</li>" +
      "</ul>";
}
function myFunction10() {
    document.getElementById("title").innerHTML = "<b>Section 3.1:Abstraction and Object Programming</b>";
    document.getElementById("content").innerHTML = "<h3>Abstraction</h3>" + 
    "<b>Abstraction</b> in programming is simimlar to any magic trick. In a magic trick, the audience only sees what the magician wants, and only the magician knows about all the underlying work.</p><p>It works the same for programmers. With abstraction, the programmer hides any and all data that isn't relevant to make the program run smoother and simpler.</p><p>This method is great because OOP shows only that programmers want <em>to target and change the objects themsleves and leave the logic behind the scenes</em> alone." + 
    "<h3>What is OOP?</h3>" + 
    "<b>OOP</b> stands for <b>Object Oriented Programming</b>. OOP is a type of programming language that, instead of focusing on indivdual aspects like strings of characters, focuses on <b>objects</b> and data. OOP can be used to help create webpages by simplifying the process by which the code is created. OOP uses <b>functions</b>, which make creating and running a code simpler by reducing and even eliminating duplicate code. For larger projects, a smaller code is very helpful.An <b>object</b> is any item that a program can target individually and that item can be moved and altered however the programmer wants.";
}
function myFunction11() {
    document.getElementById("title").innerHTML = "<b>Section 3.2 - 3.4: Functions & Classes</b>";
    document.getElementById("content").innerHTML = "<h3>Understanding Classes</h3>" + 
    ">A <b>class</b> can be defined as a blueprint to be followed to create similar <b>instances</b>. <b>Instances</b> are situations related to a specific class; If classes are a blueprint for a building, then instances are like an apartment building and a hospital with the same general layout. One of things that makes instances different is called an <b>instance variable.</b> Instance Variables are just what they sound like: Variables for an specific instances that make two instances of the same class different. It's like how an apartment is built for people to live in and a hospital is built for patients to be treated in, but bith would have similar structure." + 
    "<h3>Methods and Inheritance</h3>" + 
    "<b>Methods</b> are functions that are called in and belong exclusively to a particular class. Each class has it's own methods to help it run. <b>Instance methods</b> work in the exact same way, just for specific instances rather than classes. </p><p><b>Inheritance</b> is like how a child inherits certain traits from its parents. A class(B) called after a previous, ancestor class(A) can run the method calls of its parent class.<b> Method Overriding</b> is an important aspect of OOP because it allows one class to 'copy' another, without tedious repition. Also, the 'copy' code can still be altered and customized after the fact.";
}
function myFunction12() {
    document.getElementById("title").innerHTML = "<b>Section 4.2: Servers</b>";
    document.getElementById("content").innerHTML = "<h3>What is a server?</h3>" + 
    "A <b>server</b> can be defined as either a running software than accepts requests, or the computer that the software runs on or both. A server recieves an HTTP request, and return a response file." + 
    "<h3>What can a server return?</h3>" + 
    "<p>Successful Responses:" +
            "<ol>" +
              "<li>Static Files: images, html, any pre-written file</li>" +
              "<li>Dynamic Files: Built by running programs in the web application!</li>" +
              "<li>HTTP/1.1 200: everything is ok</li>" +
              "<li>HTTP/1.1 302: the file was found</li>" +
            "</ol>" +
          "</p>" +
          "<p>Unseccessful Responses:" +
            "<ol>" +
              "<li>Error 404: The file specified could not be found. <b>The error is on the browser side of things</b></li>" +
              "<li>Error 500: There was an issue with the server. <b>The error is on the server side.</b></li>" +
            "</ol>" +
          "</p>";
}
function myFunction13() {
    document.getElementById("title").innerHTML = "<b>Section 4.2 (cont.): GET vs. POST</b>";
    document.getElementById("content").innerHTML = "<h3>GET Requests</h3>" + 
    "<b>GET Requests</b> are used to <em>request</em> to 'get' specific data from a specified resource, usually a server. GET Requests can be <em>cached</em>, meaning it can be stored via a component so future requests can be made faster. An example is like how Google 'remembers' your last few search queries in case you need to find them again.</p>" + 
    "<h3>POST Requests</h3>" + 
    "<p><b>POST Requests</b> are used to <em>submit</em> data so it can be processed by a specified resource, usually a server. Unlike GET Requests, POST requests do not remain in any type of format after they're called: cache, history nor bookmarks. However, POST requests are better for handling secure data, like passwords, because of this.";
}
function myFunction14() {
    document.getElementById("title").innerHTML = "<b>Section 4.6: Input Validation</b>";
    document.getElementById("content").innerHTML = "<h3>Input Validation Is Important!</h3>" + 
    "Anything Internet related is vulnerable without input validation. Sensetive information can be easily obtained unless precautions are taken. Protecting these with validation makes user experience enjoyable and, mostly importantly, safe for everyone.</p>" + 
    "<p>Input Validation is also helpful if a user inputs incorrect/invalid data: Proper validation should alert the user to this and allow them to correct their mistake. An <b>error message</b> should be returned in a visible spot along with the form so that the user may correct their mistake, without anyone else knowing.</p>" + 
    "<p>Validation is also important on the servor side of the web application, because the server can be attacked by overloading it with data or information can be replecated to retrieve sensitive information.";
}
function myFunction15() {
    document.getElementById("title").innerHTML = "<b>Section 4.7: HTML Templates</b>";
    document.getElementById("content").innerHTML = "<h3>What is a Template?</h3>" + 
    "A <b>Template</b> is a library used to build complex html code by simplifying inputs. </p>" + 
    "<h3>Templates and Abstraction</h3>" + 
    "<p><b>Abstraction</b> is the process of hiding all irrelevant data to minimize complexity and increase efficiency of use. Templates are a great example of abstraction because, with templates, only the most basic, necessary code in it's main format and all extra code is brought in later by referencing another file.</p>" + 
    "<p>Ex://</p>" +
          "<ul>" +
            "<li>The base file (base.html) only has a header and a footer</li>" +
            "<li>another other html file can be inserted into the body tag using (% extends 'base.html' %) and <b>Variable Substitution</b></li>" +
            "<li>other files can also be referenced with the same method</li>" +
            "<li>A <b>Python handler</b> will always run the 'base.html' template and can have the other handlers to handle other pages.</li>" +
            "<li>Simple, Right?</li>" +
          "</ul>";
}
function myFunction16() {
    document.getElementById("title").innerHTML = "<b>JavaScript</b>";
    document.getElementById("content").innerHTML = "<h3>What is Javascript?</h3>" + 
    "<b>JavaScript</b> is a programming language on a similar level of <em>HTML</em> and <em>CSS</em>. JavaScript works in tandem with HTML and can be used to change HTML values and styles. JS can have it's own seperate .js file or it can be implemented in HTML, but it has to be wrapped in a <em>script</em> tag which has to be put into the <em>body</em> tag. JS run on functions, similar to python, but JS only runs during triggered events. JavaScript, being an <em>Object Oriented Program</em>, has its own reference to it's format, known as JSON: <b>JavaScript Object Notation.</b> JSON allows a method for other objects to be wrapped up in other objects, for easier use. Usually, GET and POST requests are run in a JSON format.</p>" + 
    "<a href='http://www.w3schools.com/js/'><button style='width:50%'>Learn More About JavaScript</button></a>";
}
function myFunction17() {
    document.getElementById("title").innerHTML = "<h1>Responsive Web Design</h1>";
    document.getElementById("content").innerHTML = "<h3>What is Responsive Web Design?</h3>" + 
    "<b>Responsive Web Design</b> is a method for delivering web pages in different sizes. RWD is a MUST for cell phones, tablets, and any type of mobile device. RWD falls under the same category as CSS, being that both styles are used for making a page easier to look at. </p>" + 
    "<a href='http://www.w3schools.com/html/html_responsive.asp'><button style='width:50%'>Learn More About RWB</button></a>";
}