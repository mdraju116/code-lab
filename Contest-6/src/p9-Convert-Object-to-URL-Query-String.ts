/* 

Convert Object to URL Query String


Write a function toQueryString that takes a flat object of key-value pairs (where values are strings or numbers) 
and converts it into a URL query string.

Each pair must be formatted as key=value, and pairs must be joined by &. Both keys and values should be encoded 
using standard URI component encoding (e.g. encodeURIComponent). Pairs should appear in the order returned by 
Object.entries(params).

Do not include a leading ? in the output. If the input object has no keys, return an empty string "".

Examples
toQueryString({ search: "hello world", page: 1 });
// => "search=hello%20world&page=1"
toQueryString({ sort: "asc", limit: 10 });
// => "sort=asc&limit=10"

Example 1
Input: params = {"page":1,"search":"hello world"}
Output: "page=1&search=hello%20world"
Explanation: Spaces are percent-encoded as %20 and pairs are joined by &.

Example 2
Input: params = {"limit":10,"sort":"asc"}
Output: "sort=asc&limit=10"
Explanation: Alphanumeric keys and values without special characters remain unchanged.

Constraints
0 <= Object.keys(params).length <= 50
All values in params are either string or number
All keys in params are non-empty strings

Topics
object
strings
transformation
encoding




*/