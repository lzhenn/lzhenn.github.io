---
layout: post
title:  "python package/module/class"
categories: technology
tags: linux python
author: LZN
---


### Module
A module is a file containing Python definitions and statements. 
The file name is the module name with the suffix `.py` appended.
The `__init__.py` files are required to make Python treat directories containing the file as packages. 


**Naming**
>Modules should have short, all-lowercase names. Underscores can be used in the module name if it improves readability. 
>When an extension module written in C or C++ has an accompanying Python module that provides a higher level (e.g. more object oriented) interface, the C/C++ module has a leading underscore (e.g. _socket).


### Package
A package is a collection of modules.
Packages are a way of structuring Python’s module namespace by using “dotted module names”. 
For example, the module name `A.B` designates a submodule named `B` in a package named `A`.

**Naming**
>Python packages should also have short, all-lowercase names, although the use of underscores is discouraged.

### Class

**Naming**
>Class names should normally use the CapWords convention.

### Instance

**Naming**
* Instance variable names should be all lower case
* Words in an instance variable name should be separated by an underscore
* Non-public instance variables should begin with a single underscore
* If an instance name needs to be mangled, two underscores may begin its name

### Reference
* https://docs.python.org/3/tutorial/modules.html
* https://www.python.org/dev/peps/pep-0008/#package-and-module-names
* https://visualgit.readthedocs.io/en/latest/pages/naming_convention.html
