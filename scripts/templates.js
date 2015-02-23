angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("src/bottom-sheet/view.html","<md-bottom-sheet class=\"md-grid\">\n    <md-list>\n        <md-item ng-repeat=\"item in items\">\n            <md-button class=\"md-grid-item-content\" aria-label=\"{{item.name}}\" ng-click=\"listItemClick($index)\">\n                <div class=\"md-icon-container\">\n                    <md-icon icon=\"{{item.icon}}\"></md-icon>\n                </div>\n                <p class=\"md-grid-text\"> {{ item.name }} </p>\n            </md-button>\n        </md-item>\n    </md-list>\n</md-bottom-sheet>");
$templateCache.put("src/home/view.html","<section layout=\"row\" layout-align=\"center center\" ng-if=\"!loaded\">\n    <md-progress-circular class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-circular>\n</section>\n\n<section ng-if=\"loaded\" flex>\n    <md-grid-list\n            md-cols-sm=\"1\" md-cols-md=\"2\" md-cols-gt-md=\"6\"\n            md-row-height-gt-md=\"1:1\" md-row-height=\"4:3\"\n            md-gutter=\"8px\" md-gutter-gt-sm=\"4px\" >\n        <md-grid-tile ng-repeat=\"tile in tiles track by $index\" ng-if=\"tile.avatar !== user.avatar\"\n                      md-rowspan=\"{{tile.span.row}}\"\n                      md-colspan=\"{{tile.span.col}}\"\n                      ng-class=\"tile.background\" ng-click=\"goToConversation(tile.avatar)\">\n            <md-icon md-svg-icon=\"avatar:{{tile.avatar}}\"></md-icon>\n            <md-grid-tile-footer><h3>{{tile.title}}</h3></md-grid-tile-footer>\n        </md-grid-tile>\n    </md-grid-list>\n</section>");
$templateCache.put("src/message/view.html","<section layout=\"row\" layout-align=\"center center\" ng-if=\"!loaded\">\n    <md-progress-circular class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-circular>\n</section>\n\n<section ng-if=\"loaded\">\n    <md-list layout=\"column\" ng-repeat=\"messagesMap in messages track by $index\" ng-if=\"messagesMap.messages.length > 0\">\n        <md-subheader ng-class=\"messagesMap.className\">{{messagesMap.label}}</md-subheader>\n        <md-item ng-repeat=\"message in messagesMap.messages track by $index | orderBy:\'when\'\">\n            <md-item-content>\n                <div class=\"md-tile-left\">\n                    <md-icon md-svg-icon=\"avatar:{{message.from}}\"></md-icon>\n                </div>\n                <div class=\"md-tile-content\">\n                    <h3>{{message.who}}</h3>\n                    <h4>{{message.when | date:\'MMM d, y \\\'at\\\' H:mm\'}}</h4>\n                    <p>{{message.what}}</p>\n                </div>\n            </md-item-content>\n        </md-item>\n    </md-list>\n</section>\n\n<section layout=\"column\">\n    <md-progress-linear ng-if=\"waiting\" class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-linear>\n    <form id=\"what\" layout=\"row\" ng-submit=\"createMessage()\" class=\"md-whiteframe-z1 md-primary\">\n        <md-icon md-svg-icon=\"avatar:{{user.avatar}}\"></md-icon>\n        <md-input-container flex>\n            <label>What</label>\n            <input ng-model=\"message.what\" columns=\"1\" md-maxlength=\"150\"/>\n        </md-input-container>\n        <md-button class=\"md-fab md-raised md-icon-container\" aria-label=\"Reply\">\n            <md-icon icon=\"hangout\"></md-icon>\n        </md-button>\n    </form>\n</section>");
$templateCache.put("src/sidenav/view.html","<md-list>\n    <md-item>\n        <md-input-container>\n            <label>Find a friend</label>\n            <input ng-model=\"searchedFriend\">\n        </md-input-container>\n    </md-item>\n    <md-item layout=\"row\" layout-align=\"center center\" ng-if=\"!loaded\">\n        <md-progress-circular class=\"md-accent\" md-mode=\"indeterminate\"></md-progress-circular>\n    </md-item>\n    <md-item ng-repeat=\"u in users | filter:{value:searchedFriend}\" ng-if=\"u.key !== user.avatar\">\n        <md-item-content>\n            <md-button ng-click=\"selectUser(u)\" ng-class=\"{selected:isSelected(u)}\">\n                <md-icon md-svg-icon=\"avatar:{{u.key}}\"></md-icon>\n                {{u.value}}\n            </md-button>\n        </md-item-content>\n    </md-item>\n</md-list>\n");
$templateCache.put("src/toolbar/view.html","<button ng-click=\"toggleSidenav(\'left\')\" hide-gt-sm class=\"menuBtn\">\n    <span class=\"visuallyhidden\">Menu</span>\n</button>\n<a class=\"md-toolbar-tools\" ui-sref=\"main\">AngularJS Material App</a>\n<md-select layout=\"left\" ng-model=\"userSelected\" md-on-open=\"loadUsers()\">\n    <md-select-label>\n        <md-icon md-svg-icon=\"avatar:{{user.avatar}}\"></md-icon>\n        {{user.who}}\n    </md-select-label>\n    <md-option ng-value=\"avatar\" ng-repeat=\"avatar in avatars\">\n        <md-icon md-svg-icon=\"avatar:{{avatar.avatar}}\"></md-icon>\n        {{avatar.who}}\n    </md-option>\n</md-select>");}]);