---
layout: post
title:  "Coursera Machine Learning Recap: W1-2"
categories: technology
tags: csapp coursera 
author: LZN
---

### W1 

#### Notes
* "Batch" Gradient Descent: Each step use all training examples.

### W2

#### Notes

### W2

#### Notes
##### Multivar linear regression
* learning rate alpha choices: 0.001, 0.003, 0.01, 0.03, 0.1, 0.3, 1... 3X test
* quadratic function / cubic function / third-order term
* polynomial regression
* Matrix inverse computational complexity O(n^3)
* Normal equation, use when feature numbers less than 10000 or so.
* Gradient descent complexity O(kn^2), where k is the number of iterations (epochs) 
* Non-invertable matrix (singular/degenerate)
    * Cause 1: Redundent feature with linear relationship
    * Cause 2: Too many features (m<<n)
* Clunkier 笨重的

##### Octave
* v= 1:0.1:2 arithmetic sequence
* ones(2,3) zeros(2,3) eye(3) rand(2,3)
* randn(2,3) % Guassian Distribution ~N(0,1)
* size(X), size(X,1), size(X,2)
* load(featureX.dat) % load a data file
* whos % command gives you variables in the current scope.
* clear X % delete X variable
* v = X(1:10) % slice
* save test.mat v % save v into test.mat file
* save test.txt v -ascii
* clear % clear all variables
* A=[A, [2; 4]] % matrix append a col vector to the rightmost position of A
* A(:) % squeeze nd data to 1d
* C = [A B]; C=[A;B] % right append and bottom append
* A*B; A.*B; % matrix multiplication and element-wise multiplication
* log(A); exp(A) % element-wise operation
* v + ones(length(v),1)
* [val, ind] = max(a)
* find(a<3) % return index
* [nrow, ncol]=find(A >= 7)
* sum(a); prod(a); % prod is the product of each element in a
* floor(a); ceil((a);
* max(A,[],1) % get max in each column 
* max(A,[],2) % get max in each row
* sum(A, 1); sum(A,2); % column sum and row sum
* filpud(A) % FLIPUD Flip array in up/down direction.
* Plot    
    * plot(t,y1); hold on; plot(t,y2); xlabel('time'); ylabel('val'); legend('sin', 'cos')
    * print -dpng 'myplot.png'
    * figure(1); plot(t,y1)
    * figure(2); plot(t,y2)
    * subplot(1,2,1); % divides canvas into 1x2 subdomain and access the first domain.
    * subplot(1,2,1); plot(t,y1); subplot(1,2,2); plot(t,y2)
    * axis([0.5 1 -1 1]) % set X axis from 0.5 to 1, and Y axis from -1 to 1
    * imagesc(A) % plot the matrix in heatmap
    * imagesc(A), colorbar, colormap gray; % in gray scale
    * comma chaining of commands would echo the result.
* Control
    * for i=1:10, v(i)=i^2; end;
    * ind = 1:10; for i=ind,
    * if elseif else
    * function y = f(x); y = x^2;
    * function y1, y2 = f(x)  % multiple values return

* summation n. 求和
* reciprocal 倒数 
* apostrophe 撇号

##### Programming 
Carefully follow the matrix size after each vectorized operation, 
of particular caution is that matlab would perform add/subtract between 1-by-n and n-by-1 matrix by **broadcasting the matrix** to fit n-by-n size.
