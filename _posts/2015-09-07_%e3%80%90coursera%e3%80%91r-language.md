---
layout: post
title:  "【Coursera】R Language" 
categories: Notebook Coursera R
tags: Notebook Coursera R
author: LZN
---

* content
{:toc}

&nbsp;
<table>
<tbody>
<tr>
<td>
<h3><strong>Background Material</strong></h3>
<h4><strong>L4</strong></h4>
get the current working directory

<strong>&gt;getwd()  #same in MAC
</strong>

read the csv (comma-seperated values) file

<strong>&gt;read.csv("xx.csv")</strong>

list the file and directory under the current directory

<strong>&gt;dir()</strong>

change the working directory

<strong>&gt;setwd("F:/workspace/")</strong>

To list out all the functions in one script

<strong>&gt;ls()</strong>
<h3>Week1</h3>
<h4>L4</h4>
assignment

<strong>&gt;x &lt;- 5</strong>

comments

<strong># hi, this is a comment</strong>
<h4>L5</h4>
5 basic "atomic" classes
<ul>
	<li>character</li>
	<li>numeric (real numbers)</li>
	<li>integer</li>
	<li>complex</li>
	<li>logical (True/False)</li>
</ul>
basic object: vector

<strong>vector function: vector(type_of, length_of)</strong>

basically, R think all number as real type, if you want a integer 1, type:

<strong>1L</strong>

Infinity:

<strong>Inf</strong>

not a number:

0/0=NAN (or as missing value)

R objects can have attributes:
<ul>
	<li>names, dimnames</li>
	<li>dimensions</li>
	<li>class (numeric)</li>
	<li>length</li>
</ul>
function to modify attributes

<strong>attributes()</strong>
<h3>L6</h3>
c() function is to create a vector:

<strong>x &lt;- c(0.5,0.6)</strong>

<strong>x &lt;- c(True, Flase)</strong>

vector() function acts alike, with initial value 0 for numeric.

<strong>x &lt;- vector("numeric", length = 10)</strong>

mixed classes

<strong>x&lt;- c(True, 3) # will be numeric</strong>

Explicit Coercion

<strong>&gt; x&lt;-0:2</strong>

<strong>&gt; class(x)</strong>

<strong>[1] "integer"</strong>

<strong>&gt; as.logical(x)</strong>

<strong>[1] FALSE TRUE TRUE</strong>

we use list() to create list.

<strong>&gt;y&lt;-list("a", 1, TRUE)</strong>
<h3>L7</h3>
create matrix

<strong>&gt;m&lt;-matrix(nrows=2, ncols=3)</strong>

<strong>&gt;attributes(m)</strong>

$dim

[1] 2 3

matrix is <strong>column wise</strong>

change vector to matrix

&gt;m&lt;-1:10

<strong>&gt;dim(m)&lt;-c(2,5)</strong>

&nbsp;

or use cbind or rbind

&gt;x&lt;-1:3

&gt;y&lt;-10:12

&gt;cbind(x,y)

1 10

2 11

2 12

&gt;rbind(x,y)

similar but in row
<h3>L8</h3>
factors are ordered or unordered, like key for the php array, factors could be treated as numeric vector with labels

give an example

&gt;x&lt;-factor(c("yes","yes","no"))

&gt;x

[1] yes yes no

Levels: no yes

&gt;table(x)

yes no

2     1

&gt;unclass(x)

221

that is how factor x expressed in R underneath!

The first level is called the baseline level, it is determined by the alphabet rank, however, you could change the order.

<strong>&gt;x&lt;-factor(c("yes","yes","no"),levels=c("yes","no"))</strong>

and yes will be in the first place.
<h3>L9-Missing Values</h3>
is.na()

is.nan()

NaN value all be treated as NA, but the converse is not true.
<h3>L10-Data Frames</h3>
tabular 表格的

data frames ~ matrices

list ~ vector

Yes, that the class doesn't matter in data frames.

Special attributes: <strong>row.names</strong>

created by

<strong>read.table() or read.csv()</strong>

convert to matrix

<strong>data.matrix()</strong>

an example:

<strong>&gt;x&lt;- data.frame(foo=1:4, bar = c(T,T,F,F))</strong>

<strong>&gt;x</strong>

<strong>   foo    bar</strong>

<strong>1    1    TRUE</strong>

<strong>2    2    TRUE</strong>

<strong>3    3    FALSE</strong>

<strong>4    4    FALSE</strong>
<h3>L10-Names Attribute</h3>
<strong>&gt;x &gt;- 1:3</strong>

<strong>&gt; names(x) &lt;- c("foo","bar","norf")</strong>

<strong>&gt;x</strong>

<strong>foo bar norf</strong>

<strong>   1     2     3</strong>
<h3>L12-Reading Tabular Data</h3>
<ul>
	<li><strong>read.table, read.csv</strong></li>
	<li><strong>readLines</strong></li>
	<li><strong>source</strong>, for reading in R code files (inverse of dump)</li>
	<li> <strong>dget</strong>, same as above, but for dparsed code (inverse of dput)</li>
	<li><strong>load, </strong>for reading in saved workspaces</li>
	<li><strong>unserialize, </strong>for reading single R objects in binary form</li>
</ul>
write
<ul>
	<li>write.table</li>
	<li>writeLines</li>
	<li>dump</li>
	<li>dput</li>
	<li>save</li>
	<li>serialize</li>
</ul>
<h4><strong> read.table</strong></h4>
<ul>
	<li>file, the name of a file, or a connection</li>
	<li>header, logical indicating if the file has a header line</li>
	<li>sep, a string indicating how the columns are separated</li>
	<li>colClasses, a character vector indicating the class of each column in the dataset</li>
	<li>nrows, the number of rows in the dataset</li>
	<li>comment.char, a character string indicating the comment character</li>
	<li>skip, the number of lines to skip from the beginning</li>
	<li>stringsAsFactors, should character variables be coded as factors?</li>
</ul>
no argument is fine, and the result would be in a data frame.

read.table default separator is space.

<strong>be sure to read the document of read.table</strong>
<h3>L12-Reading Large Tables</h3>
set the arguments!

all numeric, one is fine:

colClasses = "numeric"
<h3>L13-Textual Data Format</h3>
<h3>L17-Subsetting-Basics</h3>
&gt;x &lt;- c("a","b","c")

&gt;x[1]

[1]  "a"

&gt; x[1:3]

&gt;x[x&gt;"a"]

&gt;u &lt;- x&gt;"a"

&gt;u

[1] FALSE TRUE TRUE
<h3>L17-Subsetting-Lists</h3>
&gt;x &lt;- list (foo =1:4, bar =0.6)

&gt;x[1]

$foo

[1] 1 2 3 4

<strong>we got a list!</strong>

&gt;x[[1]]

[1]  1 2 3 4

<strong>we got a sequence!</strong>

&gt;x$bar

[1]  0.6

&gt;x[["bar"]] #this is equal

&gt;x["bar"]  # we got a list

&gt;x[c(1, 3)]

&nbsp;

&gt;name = "foo"

&gt;x[[name]]

this is useful
<h3>L17-Subsetting-Matrices</h3>
&gt;x[1, ]    # missing is fine

No dropping forcing:

&gt;x[1, 2, drop =FALSE]
<h3>L18-partial matching</h3>
&gt;x&lt;-list(aardvark=1:5)

&gt;x$a

[1] 1 2 3 4 5

&gt;x[["a"]]

NULL

&gt;x[["a", exact = FALSE]]

[1] 1 2 3 4 5
<h3>L19-Removing NA Values</h3>
&gt;x &lt;- c(1, 2, NA, 4, NA, 5)

&gt;bad &lt;- is.na(x)

&gt;x[!bad]

&nbsp;

&gt;good&lt;-complete.cases(x, y)
<h3>L20-Vectorized Operations</h3>
matrix

x*y #by rank

x%*%y # by true matrix multiplication
<h3>Week1</h3>
<h4>L2 if-else</h4>
if(x&gt;3) {

y&lt;-10

}else{

y&lt;-0

}

<strong>also true:</strong>

y&lt;- if(x&gt;3) {

10

}else{

0

}
<h4>L2 For loops</h4>
for (i in 1:10){

}

&nbsp;

x &lt;- c("a","b","c","d")

for (i in seq_along(x)){

print(x[i])

}

for (letter in x){

print(letter)

}
<h4>L4 Functions</h4>
set default value:

abc = function(a = 10){

}

columnmean &lt;- function(y, removeNA = TRUE){

nc &lt;- ncol(y)

means &lt;- numeric(nc)

for(i in 1:nc) {

mean[i] &lt;- mean(y[,i], na.rm = removeNA)

}

}
<h4>L6 Functions</h4>
... argument indicate a variable number of arguments that are usually passed on to other funcitons.

myplot &lt;- function(x, y, type = "l", ...) {

plot (x, y, type = type, ...)

}

explicityly matching after dot dot dot
<h4>L7 Functions could be made dynamically!</h4>
<strong> lexical vs. dynamical scoping</strong>

make.power &lt;- function(n) {

pow &lt;- function(x) {

x^n

}

pow

}

&nbsp;

&gt;cube &lt;- make.power(3) # note cube is a function

&gt; cube(3)

[1] 27

&nbsp;

ls(environment(cube))
<h4>L8 code style</h4>
indenting 缩进
<h4>L10 Date and times</h4>
x &lt;- as.Date("1970-01-01")

x &lt;- Sys.time()</td>
<td>
<h3><strong>Point</strong></h3>
&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

here, we can see the sytle is very like windows/dos

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

cute assignment sign

&nbsp;

same comment sign as bash

&nbsp;

&nbsp;

&nbsp;

complex! Like fortran

&nbsp;

&nbsp;

interesting...

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

Attributes! Like NCL!

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

be careful with c(), not like other language

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

in fact, I think this is really convenient

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

merge vectors to matrix, this is really user-friendly!

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

Impressive! like PHP array, but much easier to understand

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

Like NCL or MATLAB

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

See it? Plenty of data types, very user-friendly. You could imagine how simple when use data frames to process EXCEL type files.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

Briliant!!!

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

Very like $$ in ncl

&nbsp;

&nbsp;

Dim down or not, it is a problem</td>
</tr>
<tr>
<td colspan="2"> <strong> Measure</strong></td>
</tr>
</tbody>
</table>
&nbsp;