Anything that we view on the web page is downloaded first
our html page,css file,js also gets downloaded and also the video gets downloaded

## we also have to convert the video into different types

`ADAPTIVE STREAMING`
in this we divide the video into small chunks and The player continuously monitors the user’s internet speed and device performance.Based on real-time conditions, the player requests the most suitable segment to ensure smooth playback without buffering.

---

`HTTP LIVE STREAMING`
HTTP live streaming (HLS) is one of the most widely used video streaming protocols. Although it is called HTTP "live" streaming, it is used for both on-demand streaming and live streaming. HLS breaks down video files into smaller downloadable HTTP files and delivers them using the HTTP protocol. Client devices load these HTTP files and then play them back as video.

HTTP is an application layer protocol for transferring information between devices connected to a network. Every website and application accessible by regular users runs on HTTP. Data transfer over HTTP is typically based on requests and responses. Almost all HTTP messages are either a request or a response to a request.

## With streaming over HTTP, the standard request-response pattern does not apply. The connection between client and server remains open for the duration of the stream, and the server pushes video data to the client so that the client does not have to request every segment of video data.

`CORS`
CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that controls how websites can request data from other websites.

Why is CORS Needed?
Web browsers have a security rule called the same-origin policy, which blocks web pages from making requests to a different website (domain) for security reasons. This helps prevent malicious websites from accessing sensitive data from other sites you’re logged into.

However, sometimes websites need to fetch data from other domains. For example:
A JavaScript app on website A wants to get data from website B's API.
A web page needs to load images or videos from another domain.
CORS allows the server (website B) to tell the browser that it’s okay to share data with website A.

How Does CORS Work?
Request Sent: Your browser sends a request to a different domain (e.g., a JavaScript app calling an API).
Server Response: If the other website allows it, it sends back special CORS headers saying, "Yes, this site is allowed to access my data."

Access Granted or Denied:
If the headers allow it → The browser shows the data.
If the headers don’t allow it → The browser blocks the request.
