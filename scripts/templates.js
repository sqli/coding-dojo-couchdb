angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("src/bottom-sheet/view.html","<md-bottom-sheet class=\"md-grid\">\n    <md-list>\n        <md-item ng-repeat=\"item in items\">\n            <md-button class=\"md-grid-item-content\" aria-label=\"{{item.name}}\" ng-click=\"listItemClick($index)\">\n                <div class=\"md-icon-container\">\n                    <md-inline-grid-icon icon=\"{{item.icon}}\"></md-inline-grid-icon>\n                </div>\n                <p class=\"md-grid-text\"> {{ item.name }} </p>\n            </md-button>\n        </md-item>\n    </md-list>\n</md-bottom-sheet>");
$templateCache.put("src/message/view.html","<section layout=\"row\" layout-align=\"center center\" ng-if=\"!loaded\">\n    <md-progress-circular class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-circular>\n</section>\n\n<section ng-if=\"loaded\">\n    <md-list layout=\"column\" ng-repeat=\"messagesMap in messages track by $index\" ng-if=\"messagesMap.messages.length > 0\">\n        <md-subheader ng-class=\"messagesMap.className\">{{messagesMap.label}}</md-subheader>\n        <md-item ng-repeat=\"message in messagesMap.messages track by $index | orderBy:\'when\'\">\n            <md-item-content>\n                <div class=\"md-tile-left\">\n                    <span class=\"{{message.from}} avatar\" role=\"img\" aria-label=\"{{selected.name}}\"></span>\n                </div>\n                <div class=\"md-tile-content\">\n                    <h3>{{message.who}}</h3>\n                    <h4>{{message.when | date:\'MMM d, y \\\'at\\\' H:mm\'}}</h4>\n                    <p>{{message.what}}</p>\n                </div>\n            </md-item-content>\n        </md-item>\n    </md-list>\n</section>\n\n<section layout=\"column\" ng-if=\"message.to\">\n    <md-progress-linear ng-if=\"waiting\" class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-linear>\n    <form id=\"what\" layout=\"row\" ng-submit=\"createMessage()\" class=\"md-whiteframe-z1 md-primary\">\n        <span class=\"{{user.avatar}} avatar\" role=\"img\" aria-label=\"{{user.who}}\"></span>\n        <md-input-container flex>\n            <label>What</label>\n            <input ng-model=\"message.what\" columns=\"1\" md-maxlength=\"150\"/>\n        </md-input-container>\n        <md-button class=\"md-fab md-raised md-icon-container\" aria-label=\"Reply\">\n            <md-inline-grid-icon icon=\"hangout\"></md-inline-grid-icon>\n        </md-button>\n    </form>\n</section>");
$templateCache.put("src/sidenav/view.html","<md-list>\n    <md-item>\n        <md-input-container>\n            <label>Find a friend</label>\n            <input ng-model=\"searchedFriend\">\n        </md-input-container>\n    </md-item>\n    <md-item layout=\"row\" layout-align=\"center center\" ng-if=\"!loaded\">\n        <md-progress-circular class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-circular>\n    </md-item>\n    <md-item ng-repeat=\"u in users | filter:{value:searchedFriend}\" ng-if=\"u.key !== user.avatar\">\n        <md-item-content>\n            <md-button ng-click=\"selectUser(u)\" ng-class=\"{selected:isSelected(u)}\">\n                <span class=\"{{u.key}} avatar\"></span>\n                {{u.value}}\n            </md-button>\n        </md-item-content>\n    </md-item>\n</md-list>\n");
$templateCache.put("src/toolbar/view.html","<div layout=\"row\">\n    <button ng-click=\"toggleSidenav(\'left\')\" hide-gt-sm class=\"menuBtn\">\n        <span class=\"visuallyhidden\">Menu</span>\n    </button>\n    <h1 class=\"md-toolbar-tools\">AngularJS Material App</h1>\n</div>");}]);