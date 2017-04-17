# instagram-api
Instagram's unofficial API. Right now, it only supports getting photos for a given username or hashtag without needing authentication.

## Instalation
<Todo>

## Usage
<ToDo>
<Example with Angular>
<Example with Vainilla Javascript>

## Motivation
Instagram changed up the API. Every new app stars in Sandbox mode and as such has limited functionality:
- Restricted to 10 users
- Data is restricted to the 10 users and the 20 most recent media from each of those users
- Reduced API rateasdasd limits (500 request per hour)

To get out of the Sandbox your app needs to meet one of only 3 use cases that Instagram approve:
- Allows people to login with Instagram and share their own content.
- Helps brands and advertisers understand, manage their audience and media rights.
- Helps broadcasters and publishers discover content, get digital rights to media, and share.

No, no and no. There is no way to satisfy such requirements. Instead, I get the photos fetching the public JSON data provided by Instagram.

## ToDo
- Add pagination support

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
