# PHP

![kata-1-title-trains-passengers](https://github.com/darellanodev/katas-for-practice/blob/main/katas/01-passengers/img/title.png?raw=true)

Count the number of passengers that arrive at the last train station.

A train starts from a town with n passengers. The train then stops at various towns where new passengers board and others disembark. There can be more than one town where passengers get on and off. Finally, the train arrives at its destination. You must return the final number of passengers that arrive at the destination.

## Example

```php
$data = [
    [5, 0],
    [7, 3],
    [2, 3],
];

$passengersManager->countPassengersAtLastStation($data); // 8 (because 8 = 5 + 7 + 2 - (0 + 3 + 3))
```

## Requires

PHP 7.4

## Install

`composer install`
