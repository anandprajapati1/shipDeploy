var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register(['./p-e6f9ecb1.system.js'], function (exports) {
    'use strict';
    var registerInstance, createEvent, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                createEvent = module.c;
                h = module.h;
            }],
        execute: function () {
            function randomIntFromInterval(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
            function UUID() {
                return 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var dt = new Date().getTime();
                    var r = (dt + Math.random() * 16) % 16 | 0;
                    dt = Math.floor(dt / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
            }
            var enumModuleState;
            (function (enumModuleState) {
                enumModuleState[enumModuleState["INTRO"] = 0] = "INTRO";
                enumModuleState[enumModuleState["GAME"] = 1] = "GAME";
                enumModuleState[enumModuleState["RESULT"] = 2] = "RESULT";
                enumModuleState[enumModuleState["REDEEM"] = 3] = "REDEEM";
            })(enumModuleState || (enumModuleState = {}));
            function getUserData() {
                var _ud;
                _ud = JSON.parse(localStorage.getItem("user_data"));
                return _ud || new userData();
            }
            function setUserData(_ud) {
                localStorage.setItem("user_data", JSON.stringify(_ud));
            }
            var userData = /** @class */ (function () {
                function userData() {
                    this.points = 0;
                    this.couponList = [];
                }
                return userData;
            }());
            var BubbleItem = exports('bubble_item', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                    this.isPaused = false;
                    this.size = 75;
                    /**
                     * 1000/10*x
                     */
                    this.speed = 3;
                    this.val = 5;
                    this.color = "#41C4FF";
                    this.bubbleDisappeared = createEvent(this, "bubbleDisappeared", 7);
                    this.bubbleBurst = createEvent(this, "bubbleBurst", 7);
                }
                class_1.prototype.popBubble = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            if (!this.bubbleEl.classList.contains("burst")) {
                                this.bubbleEl.classList.add("burst");
                                this.bubbleBurst.emit(this.val);
                            }
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.togglePause = function (_isPaused) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.isPaused = _isPaused;
                            if (!this.isPaused)
                                this.rise(this.yPos);
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.rise = function (pos) {
                    if (pos === void 0) { pos = 0; }
                    this.yPos = pos;
                    this.rafId = requestAnimationFrame(move.bind(this));
                    function move() {
                        if (this.isPaused) {
                            cancelAnimationFrame(this.rafId);
                            return;
                        }
                        if (this.yPos >= this.heightLimit) {
                            cancelAnimationFrame(this.rafId);
                            this.bubbleEl.classList.add("hide");
                            this.bubbleDisappeared.emit(!this.bubbleEl.className.indexOf("burst"));
                        }
                        else {
                            this.yPos += this.speed;
                            this.bubbleEl.style.bottom = this.yPos + 'px';
                            this.rafId = requestAnimationFrame(move.bind(this));
                        }
                    }
                };
                class_1.prototype.reset = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.bubbleEl.style.bottom = 0 + 'px';
                            return [2 /*return*/];
                        });
                    });
                };
                class_1.prototype.componentDidLoad = function () {
                    this.bubbleEl.style.left = window.innerWidth < 767 ? randomIntFromInterval(1, 77) + '%' : randomIntFromInterval(1, 85) + '%';
                    this.bubbleEl.style.width = this.size + 'px';
                    this.bubbleEl.style.height = this.size + 'px';
                    this.rise();
                };
                class_1.prototype.render = function () {
                    var _this = this;
                    return (h("span", { class: "bubble", ref: function (el) { _this.bubbleEl = el; }, onClick: this.popBubble.bind(this), style: { "background": this.color } }, h("span", { class: "bubble-point" }, this.val)));
                };
                Object.defineProperty(class_1, "style", {
                    get: function () { return ".hide{display:none!important}:host{font-family:cargoD,Trebuchet MS,Arial,sans-serif}.bubble{border-radius:50%;position:absolute;background:#2b28c4;bottom:0;left:calc(50% - 100px);top:auto;-webkit-transition:opacity .3s ease;transition:opacity .3s ease;opacity:1;cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-shadow:inset -5px -5px 10px rgba(0,0,0,.3);box-shadow:inset -5px -5px 10px rgba(0,0,0,.3)}.bubble-point{color:#fff;text-align:center}.bubble.burst{opacity:0}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_1;
            }()));
            var GameItem = exports('game_item', /** @class */ (function () {
                function class_2(hostRef) {
                    registerInstance(this, hostRef);
                    // Popped counting per level
                    this.score = 0;
                    this.currentLevelNo = 0;
                    this.containerHeight = 600;
                    this.isPaused = false;
                    this.isGameOver = false;
                    this.life = 5;
                    this.currentLevelBubbleCounter = 0;
                    /**Game levels */
                    this.levels = [
                        {
                            speed: 3,
                            count: 25,
                            value: 10,
                            color: "#41C4FF",
                            isLevelPassed: false
                        },
                        {
                            speed: 4,
                            count: 30,
                            value: 15,
                            color: "#FFD500",
                            isLevelPassed: false
                        },
                        {
                            speed: 4.5,
                            count: 40,
                            value: 20,
                            color: "#3DD94A",
                            isLevelPassed: false
                        },
                        {
                            speed: 5,
                            count: 50,
                            value: 30,
                            color: "#F262D3",
                            isLevelPassed: false
                        },
                        {
                            speed: 5,
                            count: 50,
                            value: 50,
                            color: "#9574EA",
                            isLevelPassed: false
                        }
                    ];
                    this.btnClicked = createEvent(this, "btnClicked", 7);
                    this.exitingGame = createEvent(this, "exitingGame", 7);
                }
                /** To trigger game start from popup module while switching to game screen */
                class_2.prototype.startGame = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.resetLevel();
                            this.currentLevel = this.levels[this.currentLevelNo];
                            this.startLevel();
                            return [2 /*return*/];
                        });
                    });
                };
                class_2.prototype.bubbleDisappearedHandler = function (isLifeLost) {
                    if (isLifeLost === void 0) { isLifeLost = false; }
                    this.currentLevelBubbleCounter++;
                    this.life -= isLifeLost ? 1 : 0;
                    if (this.currentLevelBubbleCounter >= this.currentLevel.count) {
                        if (this.currentLevelNo + 1 < this.levels.length && this.life > 0) {
                            this.levelUp();
                        }
                        else {
                            //Game over
                            this.saveScore();
                        }
                    }
                };
                class_2.prototype.onBubbleBurst = function (e) {
                    this.score += e.detail;
                    this.popedAudioTag.play();
                };
                class_2.prototype.onNavigatedHandler = function (e) {
                    // console.log(e.detail);
                    switch (e.detail) {
                        case enumModuleState.GAME.toString():
                            this.startGame();
                            e.stopImmediatePropagation();
                            break;
                        case enumModuleState.INTRO.toString():
                            this.exitGame();
                            break;
                        default:
                            this.exitGame();
                            break;
                    }
                };
                class_2.prototype.resetLevel = function () {
                    this.life = 5;
                    this.score = 0;
                    this.currentLevelNo = 0;
                    this.currentLevelBubbleCounter = 0;
                    this.isPaused = false;
                    this.isGameOver = false;
                };
                /** To initialize alevel data.
                 * Will be called on start of each level */
                class_2.prototype.startLevel = function () {
                    var _this = this;
                    //Level start animation
                    this.levelAnim.classList.add("show");
                    setTimeout(function () {
                        _this.levelAnim.classList.remove("show");
                        _this.gameElement.innerHTML = "";
                        var j = 0;
                        _this.bubbleGenIntId = setInterval(function () {
                            if (!_this.isPaused) {
                                var _item = document.createElement("bubble-item");
                                _item.setAttribute("val", _this.currentLevel.value.toString());
                                _item.setAttribute("speed", _this.currentLevel.speed.toString());
                                _item.setAttribute("height-limit", _this.containerHeight.toString());
                                _item.setAttribute("color", _this.currentLevel.color.toString());
                                _this.gameElement.appendChild(_item);
                                j++;
                            }
                            if (j >= _this.currentLevel.count) {
                                clearInterval(_this.bubbleGenIntId);
                            }
                        }, 3000 / _this.currentLevel.speed);
                    }, 1000);
                };
                class_2.prototype.levelUp = function () {
                    this.currentLevelBubbleCounter = 0;
                    this.levels[this.currentLevelNo].isLevelPassed = true;
                    this.currentLevelNo++;
                    this.currentLevel = this.levels[this.currentLevelNo];
                    this.startLevel();
                };
                /**Pause game */
                class_2.prototype.pauseGame = function () {
                    this.btnClicked.emit();
                    this.isPaused = !this.isPaused;
                    var i = 0;
                    while (i < this.gameElement.children.length) {
                        this.gameElement.children[i].togglePause(this.isPaused);
                        i++;
                    }
                };
                /**To exit and clear garbage html */
                class_2.prototype.exitGame = function () {
                    this.gameElement.innerHTML = "";
                    this.exitingGame.emit();
                    this.btnClicked.emit();
                    clearInterval(this.bubbleGenIntId);
                };
                // Game over
                class_2.prototype.saveScore = function () {
                    this.isGameOver = true;
                    this.gameElement.innerHTML = "";
                    // Save score in local storage
                    this._userSavedData.points += this.score;
                    setUserData(this._userSavedData);
                };
                class_2.prototype.componentWillLoad = function () {
                    this._userSavedData = getUserData();
                };
                class_2.prototype.render = function () {
                    var _this = this;
                    return [
                        h("div", { class: (this.isGameOver ? "hide" : "") + " score" }, h("audio", { src: "https://anandprajapati1.github.io/shipDeploy/assets/media/poped.mp3", ref: function (el) { return _this.popedAudioTag = el; }, class: "hide" }), h("span", { class: "life life-" + this.life }, h("span", null), h("span", null), h("span", null), h("span", null), h("span", null)), h("span", { class: "score-label" }, "POINTS"), h("span", { class: "score-text" }, this.score)),
                        h("button", { class: (this.isPaused || this.isGameOver ? "hide" : "") + " pause-btn", onClick: this.pauseGame.bind(this) }, "Pause"),
                        h("div", { class: (this.isPaused ? "paused" : "") + " game-item " + (this.isGameOver ? "game-over" : "game-playing"), ref: function (el) { return _this.gameElement = el; } }),
                        (function () {
                            if (_this.isPaused) {
                                return h("div", { class: "pause-overlay" }, h("div", { class: _this.isPaused ? "" : "hide" }, h("button", { class: "resume-btn", onClick: _this.pauseGame.bind(_this) }, "Resume"), h("button", { class: "home-btn", onClick: _this.exitGame.bind(_this) }, "Home")));
                            }
                            else if (_this.isGameOver)
                                return h("score-board", { score: _this.score });
                        })(),
                        h("span", { class: "level-start-anim", ref: function (el) { return _this.levelAnim = el; } }, this.currentLevelNo + 1)
                    ];
                };
                Object.defineProperty(class_2, "style", {
                    get: function () { return ".hide{display:none!important}:host{display:block}.game-item.game-playing:before{content:\"\";position:absolute;left:0;top:0;width:100%;height:100%;display:block;background:hsla(0,0%,100%,.9);padding:10px;border-radius:10px;-webkit-box-sizing:border-box;box-sizing:border-box;box-shadow:inset 0 0 35px 15px #5f1f64;-webkit-box-shadow:inset 0 0 5px 3px #5f1f64;z-index:-1}.score{width:30%;height:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;z-index:5;margin:10px}.score .score-label,.score .score-text{color:#fff;font-family:cargoD,Trebuchet MS,Arial,sans-serif;font-size:20px;padding:0 5px;color:#5f1f64}\@media (min-width:992px){.score .score-label,.score .score-text{font-size:20px}}.life{width:100px;-ms-flex:1 0 100px;flex:1 0 100px}.life>span{display:inline-block;width:20%;height:20px;border-radius:50%;border:1px solid #fff;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.life>span:before{content:\"\";background:#d2264e;display:block;width:0;height:20px;-webkit-transition:width .3s ease;transition:width .3s ease}.life.life-1>span:first-child:before,.life.life-2>span:first-child:before,.life.life-2>span:nth-child(2):before,.life.life-3>span:first-child:before,.life.life-3>span:nth-child(2):before,.life.life-3>span:nth-child(3):before,.life.life-4>span:first-child:before,.life.life-4>span:nth-child(2):before,.life.life-4>span:nth-child(3):before,.life.life-4>span:nth-child(4):before,.life.life-5>span:first-child:before,.life.life-5>span:nth-child(2):before,.life.life-5>span:nth-child(3):before,.life.life-5>span:nth-child(4):before,.life.life-5>span:nth-child(5):before{width:100%}.pause-overlay{z-index:7}.pause-btn{background:url(https://anandprajapati1.github.io/shipDeploy/assets/img/close.png);background-size:contain;cursor:pointer;border:0;padding:0;z-index:9999;width:25px;height:25px;text-indent:9999px;position:absolute;right:10px;top:10px}\@media (min-width:768px){.pause-btn{width:30px;height:30px}}\@media (min-width:992px){.pause-btn{width:40px;height:40px}}.level-start-anim{visibility:hidden;width:100px;height:100px;padding:22px;position:absolute;left:50%;top:50%;border-radius:50%;background:#c5e86c;-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.5);box-shadow:0 0 10px 0 rgba(0,0,0,.5);font-size:50px;color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all 1s ease;transition:all 1s ease;opacity:0}.level-start-anim.show{visibility:visible;-webkit-transform:translate(-50%,-50%) scale(1.5);transform:translate(-50%,-50%) scale(1.5);opacity:1}.pause-overlay{background:rgba(0,0,0,.75);-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;display:-ms-flexbox;display:flex;text-align:center;position:absolute;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pause-overlay button{width:50px;height:50px;border-radius:50%;display:inline-block;margin:0 15px}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_2;
            }()));
            var NavItem = exports('nav_item', /** @class */ (function () {
                function class_3(hostRef) {
                    registerInstance(this, hostRef);
                    // tooltip opened
                    this.tooltipOpened = false;
                    // replay-disabled
                    this.replayDisabled = false;
                    this.onNavigated = createEvent(this, "onNavigated", 7);
                    this.btnClicked = createEvent(this, "btnClicked", 7);
                }
                // Go to home
                class_3.prototype.goHome = function () {
                    this.onNavigated.emit(enumModuleState.INTRO.toString());
                    this.btnClicked.emit();
                };
                // replay
                class_3.prototype.replay = function () {
                    this.onNavigated.emit(enumModuleState.GAME.toString());
                    this.btnClicked.emit();
                };
                // tooltip on share button
                class_3.prototype.share = function () {
                    this.tooltipOpened = !this.tooltipOpened;
                    this.btnClicked.emit();
                };
                class_3.prototype.render = function () {
                    var _this = this;
                    return (h("div", { class: "nav-item" }, h("ul", null, h("li", { class: "home" }, h("button", { onClick: this.goHome.bind(this) })), h("li", { class: (this.replayDisabled ? "hide" : "") + " replay" }, h("button", { onClick: this.replay.bind(this) })), h("li", { class: "share" }, h("button", { onClick: this.share.bind(this) }), h("div", { class: (this.tooltipOpened ? "open" : "") + "tooltip", onClick: function () { return _this.btnClicked.emit(); } }, h("span", { class: "social-icon facebook", onClick: function () { window.open("https://www.facebook.com/sharer/sharer.php?title=I won redeemable points to purchase the amazing unilever products on great discount!!&u=" + encodeURIComponent(location.href), "width=320,height=320"); return false; } }, "Facebook"), h("br", null), h("span", { class: "social-icon twitter", onClick: function () { window.open('http://twitter.com/share?url=' + encodeURIComponent(location.href) + '&text=I won redeemable points to purchase the amazing unilever products on great discount!!', 'left=0,top=0,width=320,height=320,personalbar=0,toolbar=0,scrollbars=0,resizable=0'); return false; } }, "Twitter"))))));
                };
                Object.defineProperty(class_3, "style", {
                    get: function () { return ".hide{display:none!important}:host{font-family:cargoD,Trebuchet MS,Arial,sans-serif}:host .tooltip{display:none}:host .tooltip .open{display:block}.nav-item ul{list-style:none;width:100%;margin:0;padding:0}.nav-item ul li{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;margin:15px 10px 25px}.nav-item ul li button{display:block;height:60px;width:60px;font-size:20px;color:#5f1f64;text-transform:uppercase;border-radius:50%;background:#fff;cursor:pointer;border:none}.nav-item ul li button:hover{-webkit-box-shadow:0 0 14px 0 #fff;box-shadow:0 0 14px 0 #fff}.nav-item ul li button:before{content:\"\";width:75%;display:block;position:relative;margin:0 auto}.nav-item ul li.home button:before{content:url(https://anandprajapati1.github.io/shipDeploy/assets/svg/home.svg)}.nav-item ul li.replay button:before{content:url(https://anandprajapati1.github.io/shipDeploy/assets/svg/replay.svg)}.nav-item ul li.share button:before{content:url(https://anandprajapati1.github.io/shipDeploy/assets/svg/share.svg);margin-top:7px}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_3;
            }()));
            var PopupModel = exports('popup_model', /** @class */ (function () {
                function class_4(hostRef) {
                    registerInstance(this, hostRef);
                    this.isOpened = false;
                    this.currentPopup = enumModuleState.INTRO;
                    this.totalPoints = 0;
                    this._containerHeight = 575;
                    this.btnClicked = createEvent(this, "btnClicked", 7);
                }
                // Skip Intro
                class_4.prototype.skipIntro = function () {
                    this.currentPopup = enumModuleState.GAME;
                    this._gameItem.startGame();
                    this.btnClicked.emit();
                };
                class_4.prototype.openRedemption = function () {
                    this.currentPopup = enumModuleState.REDEEM;
                    this._redeemPanel.refreshScore();
                    this.btnClicked.emit();
                };
                // Close popup
                class_4.prototype.closePopup = function () {
                    this.isOpened = false;
                    this.btnClicked.emit();
                    this.backgroundAudioTag.pause();
                };
                // Open popup
                class_4.prototype.openPopup = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.isOpened = true;
                            this.currentPopup = enumModuleState.INTRO;
                            // Background audio
                            this.backgroundAudioTag.volume = 0.05;
                            this.backgroundAudioTag.play();
                            this.backgroundAudioTag.loop = true;
                            return [2 /*return*/];
                        });
                    });
                };
                class_4.prototype.onGameOver = function () {
                    // Add new score to total Game score
                    this._userData = getUserData();
                    this.totalPoints = this._userData.points;
                    this.currentPopup = enumModuleState.INTRO;
                };
                class_4.prototype.onNavigatedHandler = function (e) {
                    // console.log(e.detail);
                    switch (e.detail) {
                        case enumModuleState.INTRO.toString():
                            this.openPopup();
                            break;
                        default:
                            this.openPopup();
                            break;
                    }
                };
                class_4.prototype.onCouponPurchased = function () {
                    this._userData = getUserData();
                    this.totalPoints = this._userData.points;
                };
                class_4.prototype.componentWillLoad = function () {
                    this._userData = getUserData();
                    this.totalPoints = this._userData.points;
                };
                class_4.prototype.render = function () {
                    var _this = this;
                    return (h("div", { class: (this.isOpened ? "open" : "") + " popup-model" }, h("audio", { src: "https://anandprajapati1.github.io/shipDeploy/assets/media/bg-music.mp3", ref: function (el) { return _this.backgroundAudioTag = el; }, class: "hide" }), h("div", { class: "popup-model-container", style: { 'max-height': this._containerHeight + "px" } }, h("button", { class: (this.currentPopup == enumModuleState.INTRO || this.currentPopup == enumModuleState.REDEEM ? "" : "hide") + " popup-model-close", onClick: this.closePopup.bind(this) }), h("div", { class: "popup-model-content" }, h("div", { class: (this.currentPopup == enumModuleState.INTRO ? "" : "hide") + " intro-panel" }, h("div", { class: "white-circle" }, h("h1", null, "Welcome to game zone!"), h("h2", null, "You can play game and get coupons everyday"), h("button", { class: "skip-intro-btn", onClick: this.skipIntro.bind(this) }, "Play Game"), h("div", { class: "points" }, h("span", { class: "points-label" }, "Points : "), h("span", { class: "points-text" }, this.totalPoints)), h("button", { class: "redeem-btn", onClick: this.openRedemption.bind(this) }, "Redeem Now")), h("div", { class: "disclaimer-note" }, h("p", null, "The winning points are being saved in your machine local storage, so please be conscious before remove the system cache."))), h("div", { class: (this.currentPopup == enumModuleState.GAME ? "" : "hide") + " first-screen" }, h("game-item", { ref: function (el) { return _this._gameItem = el; }, "container-height": this._containerHeight })), h("div", { class: (this.currentPopup == enumModuleState.REDEEM ? "" : "hide") + " redeem-screen" }, h("redeem-panel", { ref: function (el) { return _this._redeemPanel = el; } }))))));
                };
                Object.defineProperty(class_4, "style", {
                    get: function () { return ".hide{display:none!important}.popup-model{font-family:cargoD,Trebuchet MS,Arial,sans-serif;color:#fff;display:none;position:fixed;left:0;top:0;background:rgba(0,0,0,.5);width:100%;height:100%;z-index:9999}.popup-model.open{display:block}.popup-model-close{background:url(assets/img/close.png);background-size:contain;cursor:pointer;border:0;padding:0;z-index:9999;width:25px;height:25px;text-indent:9999px;position:absolute;right:10px;top:10px}\@media (min-width:768px){.popup-model-close{width:30px;height:30px}}\@media (min-width:992px){.popup-model-close{width:40px;height:40px}}.popup-model-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:calc(100vw - 30px);height:calc(100vh - 30px);overflow:hidden;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;left:50%;top:50%;border-radius:10px;max-width:500px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px;background:url(https://anandprajapati1.github.io/shipDeploy/assets/img/gameBg.png) no-repeat;background-color:#eaa041;background-size:125%;background-position:50%}\@media (min-width:768px){.popup-model-container{background-size:cover;background-position:50%;max-width:600px}}\@media (min-width:992px){.popup-model-container{background-size:cover;background-position:50%;max-width:930px}}.popup-model-container .intro-panel{border:0 solid #97d700}.popup-model-container .intro-panel .white-circle{border:0 solid #fff;height:auto;padding:25px 20px 10px;box-shadow:inset 0 0 35px 15px #fff;-webkit-box-shadow:inset 0 0 35px 15px #fff;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50px;background:rgba(63,1,108,.8);position:absolute;top:calc(50% - 35px);left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:90%;max-width:350px}\@media (min-width:768px){.popup-model-container .intro-panel .white-circle{padding:30px 30px 10px;max-width:400px}}\@media (min-width:992px){.popup-model-container .intro-panel .white-circle{max-width:600px;padding:75px 50px 10px;top:calc(50% - 55px)}}.popup-model-container .intro-panel .disclaimer-note{position:fixed;bottom:0;top:auto;left:10px;right:10px;height:50px}\@media (min-width:768px){.popup-model-container .intro-panel .disclaimer-note{left:20px;right:20px;height:50px}}\@media (min-width:992px){.popup-model-container .intro-panel .disclaimer-note{left:30px;right:30px;height:30px}}.popup-model-container .intro-panel .disclaimer-note p{font:normal 10px arial}.popup-model-content{text-align:center;position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex:1 0;flex:1 0;overflow:hidden}.popup-model-content>div{-ms-flex:1 0 100%;flex:1 0 100%;width:100%}.popup-model h1{font-family:cargoD,Trebuchet MS,Arial,sans-serif;font-weight:400;font-size:20px;margin:0 0 10px;padding:0;line-height:1;text-transform:uppercase}\@media (min-width:768px){.popup-model h1{font-size:27px;margin:0 0 10px}}\@media (min-width:992px){.popup-model h1{font-size:40px;margin:0 0 15px}}.popup-model h2{font-family:cargoD,Trebuchet MS,Arial,sans-serif;font-weight:400;font-size:14px;text-transform:uppercase;margin:0 0 5px;padding:0;line-height:1;padding:0 35px}\@media (min-width:768px){.popup-model h2{font-size:20px;margin:0 0 5px;padding:0 35px}}\@media (min-width:992px){.popup-model h2{font-size:20px;margin:0 0 10px;padding:0 35px}}.popup-model .skip-intro-btn{background:url(assets/img/gamePlay.png) transparent no-repeat;background-size:contain;cursor:pointer;color:#fff;font-size:14px;width:67px;height:46px;padding:0;border:0;text-indent:-2000px;margin:10px 0}\@media (min-width:768px){.popup-model .skip-intro-btn{width:100px;height:70px;margin:10px 0 10px}}\@media (min-width:992px){.popup-model .skip-intro-btn{width:134px;height:92px;margin:10px 0 30px}}.popup-model .points{margin-bottom:10px}.popup-model .points span{color:#fff;font-family:cargoD,Trebuchet MS,Arial,sans-serif;font-size:14px;text-transform:uppercase}\@media (min-width:768px){.popup-model .points span{font-size:27px}}\@media (min-width:992px){.popup-model .points span{font-size:27px}}.popup-model .redeem-btn{background:#d2264e;border-radius:10px;border-style:solid;border-width:3px;border-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;cursor:pointer;text-transform:none;font-family:cargoD,Trebuchet MS,Arial,sans-serif;font-size:14px;line-height:1;padding:5px 10px;text-transform:uppercase}\@media (min-width:992px){.popup-model .redeem-btn{font-size:27px}}.popup-model .redeem-screen{background:url(https://anandprajapati1.github.io/shipDeploy/assets/img/gameBg.png) no-repeat;background-size:110%;background-position:50%;width:100%;overflow:scroll;margin:0 auto;padding:7px 0}.popup-model .redeem-screen::-webkit-scrollbar{width:.6em}.popup-model .redeem-screen::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #d4264b;-webkit-box-shadow:inset 0 0 6px #d4264b}.popup-model .redeem-screen::-webkit-scrollbar-thumb{background-color:#d4264b;outline:1px solid #d4264b}:focus{outline:none}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_4;
            }()));
            var RedeemPoint = exports('redeem_panel', /** @class */ (function () {
                function class_5(hostRef) {
                    registerInstance(this, hostRef);
                    this.dataUpdated = false;
                    this.productJson = [];
                    this.btnClicked = createEvent(this, "btnClicked", 7);
                }
                class_5.prototype.refreshScore = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this._userData = getUserData();
                            this._tabPanel.refreshScore();
                            return [2 /*return*/];
                        });
                    });
                };
                class_5.prototype.onCouponPurchased = function () {
                    this._userData = getUserData();
                };
                //Before rendering
                class_5.prototype.componentWillLoad = function () {
                    // points render
                    this._userData = getUserData();
                };
                class_5.prototype.componentDidLoad = function () {
                    var _this = this;
                    // get json response
                    var productJsonUrl = window.location + "home.productfeed.json";
                    if (window.location.hostname === "localhost" || window.location.hostname.indexOf("github.io") > 0) {
                        productJsonUrl = window.location + "assets/demo.json";
                    }
                    fetch(productJsonUrl)
                        .then(function (response) { return response.json(); })
                        .then(function (response) {
                        for (var i = 0; i < 4; i++) {
                            _this.productJson.push({
                                name: response.locales[0].products.product[i].name,
                                image: response.locales[0].products.product[i].imageUrl,
                                url: response.locales[0].products.product[i].productPageUrl
                            });
                        }
                        _this.dataUpdated = true;
                    });
                };
                class_5.prototype.render = function () {
                    var _this = this;
                    return (h("div", { class: "redeem-panel" }, h("div", { class: "redeem-point" }, "Points : ", h("span", { class: "" }, this._userData.points)), h("tab-panel", { ref: function (el) { return _this._tabPanel = el; } }), h("div", { class: "product-section" }, h("div", { class: "title" }, "You can use coupon code in below product also"), this.dataUpdated && this.productJson.map(function (productItem) { return h("div", { class: "product-item" }, h("a", { href: productItem.url, target: "_black", onClick: function () { return _this.btnClicked.emit(); } }, h("img", { src: productItem.image, title: productItem.name, alt: productItem.name }), h("span", null, productItem.name))); })), h("nav-item", { "replay-disabled": "true" })));
                };
                Object.defineProperty(class_5, "style", {
                    get: function () { return ".hide{display:none!important}.redeem-panel{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;width:100%;border-radius:10px;background:rgba(95,31,100,.9);-webkit-box-shadow:inset 0 0 14px 0 #fff;-moz-box-shadow:inset 0 0 14px 0 #fff;box-shadow:inset 0 0 14px 0 #fff}.redeem-point{font-size:27px;line-height:30px;text-transform:uppercase;margin:25px auto 5px}\@media (min-width:992px){.redeem-point{font-size:40px}}.product-section{background:rgba(50,16,53,.7)}.product-section .title{font-size:20px;text-transform:uppercase;text-align:center;margin:30px 0}\@media (min-width:992px){.product-section .title{font-size:30px}}.product-section .product-item{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;width:calc((100% - 20px)/ 3);margin:0 20px 30px}\@media (min-width:992px){.product-section .product-item{width:calc((100% - 20px)/ 5)}}.product-section .product-item a{color:#fff;text-transform:uppercase;text-decoration:none;font-size:20px}.product-section .product-item img{max-width:100%;border:2px solid #fff;border-radius:10px}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_5;
            }()));
            var ScoreBoard = exports('score_board', /** @class */ (function () {
                function class_6(hostRef) {
                    registerInstance(this, hostRef);
                    this.isVisible = false;
                    this.score = 0;
                    this.redeemClick = createEvent(this, "redeemClick", 7);
                }
                class_6.prototype.render = function () {
                    var _this = this;
                    return (h("div", { class: "score-board-parent" }, h("div", { class: "white-circle" }, h("div", { class: "score-board" }, h("h1", null, "Game Over"), h("h2", null, h("span", null, "Points : "), this.score), h("button", { class: "redeem-btn", onClick: function () { return _this.redeemClick.emit(); } }, "Redeem Now"), h("nav-item", null)))));
                };
                Object.defineProperty(class_6, "style", {
                    get: function () { return ".hide{display:none!important}.score-board-parent{width:calc(100% + 0px);height:calc(100% + 0px);margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;text-align:center;position:absolute;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:url(https://anandprajapati1.github.io/shipDeploy/assets/img/gameBg.png) no-repeat;background-color:#eaa041;background-size:125%;background-position:50%}\@media (min-width:768px){.score-board-parent{background-size:cover;background-position:50%;max-width:600px}}\@media (min-width:992px){.score-board-parent{background-size:cover;background-position:50%;max-width:930px}}.score-board-parent .white-circle{border:0 solid #fff;height:auto;padding:20px 20px 5px;box-shadow:inset 0 0 35px 15px #fff;-webkit-box-shadow:inset 0 0 35px 15px #fff;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50px;background:rgba(63,1,108,.8);position:absolute;top:calc(50% - 35px);left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:90%;max-width:350px}\@media (min-width:768px){.score-board-parent .white-circle{padding:20px 30px 5px;max-width:400px}}\@media (min-width:992px){.score-board-parent .white-circle{max-width:600px;padding:75px 50px 10px;top:calc(50% - 55px)}}.score-board-parent .white-circle .nav-item{background:none}.score-board-parent h1{color:#fff;font-family:cargoD,Trebuchet MS,Arial,sans-serif;font-size:40px;font-weight:400}\@media (min-width:992px){.score-board-parent h1{font-size:40px}}.score-board-parent h2{color:#fff;font-family:cargoD,Trebuchet MS,Arial,sans-serif;font-size:14px;font-weight:400}\@media (min-width:768px){.score-board-parent h2{font-size:27px}}\@media (min-width:992px){.score-board-parent h2{font-size:27px}}.score-board .redeem-btn{background:#d2264e;border-radius:10px;border-style:solid;border-width:3px;border-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;cursor:pointer;text-transform:none;font-family:cargoD,Trebuchet MS,Arial,sans-serif;font-size:14px;line-height:1;padding:5px 10px;text-transform:uppercase}\@media (min-width:992px){.score-board .redeem-btn{font-size:27px}}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_6;
            }()));
            var TabPanel = exports('tab_panel', /** @class */ (function () {
                function class_7(hostRef) {
                    registerInstance(this, hostRef);
                    this.isDisabled = true;
                    this.isCouponVisible = false;
                    this.activePanel = 1;
                    this.tabs = [{ tid: 1, title: "Redeem coupon" }, { tid: 2, title: "Earned coupons" }];
                    this.point_CoinMapper = [
                        { point: 100, coin: 10 },
                        { point: 200, coin: 20 },
                        { point: 300, coin: 30 },
                        { point: 400, coin: 40 },
                        { point: 500, coin: 50 }
                    ];
                    this.couponPurchased = createEvent(this, "couponPurchased", 7);
                    this.btnClicked = createEvent(this, "btnClicked", 7);
                }
                class_7.prototype.pointSelected = function (_pt) {
                    this.pointSelectedInput = _pt;
                    this.isDisabled = this._userData.points < this.pointSelectedInput.point;
                    this.isCouponVisible = false;
                    this.btnClicked.emit();
                };
                // Tab clicked
                class_7.prototype.tabClicked = function (val) {
                    this.activePanel = val;
                    this.btnClicked.emit();
                };
                class_7.prototype.createCoupon = function () {
                    var uuid = UUID();
                    this._userData.couponList.push({ code: uuid, coin: this.pointSelectedInput.coin });
                    this.isCouponVisible = true;
                    this.redeemCouponCode.innerHTML = uuid;
                    this._userData.points -= this.pointSelectedInput.point;
                    setUserData(this._userData);
                    this.couponPurchased.emit();
                    this.btnClicked.emit();
                };
                class_7.prototype.refreshScore = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this._userData = getUserData();
                            return [2 /*return*/];
                        });
                    });
                };
                //Before rendering
                class_7.prototype.componentWillLoad = function () {
                    // points render
                    this.refreshScore();
                };
                class_7.prototype.render = function () {
                    var _this = this;
                    return (h("div", { class: "tab-panel" }, h("ul", { class: "tab-panel-navigation" }, this.tabs.map(function (item) { return h("li", { "data-link": item.tid, class: (_this.activePanel == item.tid ? "active" : "") + " tab-panel-item", onClick: _this.tabClicked.bind(_this, item.tid) }, item.title); })), h("div", { class: "tab-panel-container" }, this.tabs.map(function (el) { return h("div", { "data-tab-id": el.tid, class: (_this.activePanel == el.tid ? "open" : "") + " tab-panel-content" }, el.tid == 1 ?
                        [h("div", { class: (_this.isDisabled ? "disabled" : "") + " redeem" }, h("button", { class: (_this.isCouponVisible ? "" : "show") + " redeem-button", onClick: _this.createCoupon.bind(_this) }, "Click to redeem"), h("div", { class: (_this.isCouponVisible ? "show" : "") + " redeem-coupon" }, h("span", null, "Coupon"), h("div", { class: "redeem-coupon-code", ref: function (el) { return _this.redeemCouponCode = el; } }))),
                            h("div", { class: "points" }, h("ul", null, _this.point_CoinMapper.map(function (pt) { return h("li", null, h("label", null, h("input", { type: "radio", name: "point", onChange: _this.pointSelected.bind(_this, pt) }), pt.point, " Points = ", pt.coin, " Coins", h("span", { class: "checkmark" }))); })))] :
                        h("div", { class: "previous-coupon" }, h("ul", null, h("li", null, h("div", { class: "heading serial-number" }, "Sl"), h("div", { class: "heading coupon-code" }, "Coupons Code"), h("div", { class: "heading coins" }, "Coins")), _this._userData.couponList.length ? _this._userData.couponList.map(function (couponCoin, index) { return h("li", null, h("div", { class: "serial-number" }, index + 1), h("div", { class: "coupon-code" }, couponCoin.code), h("div", { class: "coins" }, couponCoin.coin)); }) : h("li", { class: "no-coupons" }, "No Coupons")))); }))));
                };
                Object.defineProperty(class_7, "style", {
                    get: function () { return ".hide{display:none!important}.tab-panel{width:calc(100% - 40px);margin:20px auto}.tab-panel *{margin:0 0 .5px 0;padding:0}.tab-panel :focus{outline:none}.tab-panel-navigation{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;list-style:none}.tab-panel-navigation li{padding:10px 15px;-ms-flex:1 1 50%;flex:1 1 50%;background:#9e18a9;cursor:pointer;text-align:center;font-size:20px;text-transform:uppercase}\@media (min-width:768px){.tab-panel-navigation li{font-size:27px}}\@media (min-width:992px){.tab-panel-navigation li{font-size:40px}}.tab-panel-navigation li:first-child{border-top-left-radius:10px}.tab-panel-navigation li:last-child{border-top-right-radius:10px}.tab-panel-navigation li.active{background:#d4264b}.tab-panel-content{display:none;background:#9e18a9;padding:20px 10px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}\@media (min-width:992px){.tab-panel-content{padding:20px}}.tab-panel-content.open{background:#d4264b;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-pack:justify;justify-content:space-between}\@media (min-width:992px){.tab-panel-content.open{-ms-flex-direction:row;flex-direction:row}}.tab-panel .redeem{margin:30px auto 0;width:150px;-ms-flex:0 0 150px;flex:0 0 150px;height:150px;border-radius:50%;background:#75205f;-webkit-box-shadow:inset 0 0 35px 20px #fff;-moz-box-shadow:inset 0 0 35px 20px #fff;box-shadow:inset 0 0 35px 20px #fff;opacity:1;cursor:auto;overflow:hidden}\@media (min-width:992px){.tab-panel .redeem{margin:0 0 0 30px;width:200px;-ms-flex:0 0 200px;flex:0 0 200px;height:200px}}.tab-panel .redeem.disabled{pointer-events:none;background:#a7a8aa}.tab-panel .redeem-button{background:none;width:100%;border:0;height:100%;display:none;color:#fff;cursor:pointer;font-size:20px;text-transform:uppercase;font-family:cargoD,Trebuchet MS,Arial,sans-serif}\@media (min-width:992px){.tab-panel .redeem-button{font-size:30px}}.tab-panel .redeem-coupon{text-align:center;display:none;text-transform:uppercase;font-size:20px;font-family:cargoD,Trebuchet MS,Arial,sans-serif;width:100%;height:100%}\@media (min-width:992px){.tab-panel .redeem-coupon{font-size:30px}}.tab-panel .redeem-coupon-code{width:100%;background:#000;font-size:16px;padding:5px;margin-top:5px;-webkit-box-shadow:inset 0 0 8px 0 #fff;-moz-box-shadow:inset 0 0 8px 0 #fff;box-shadow:inset 0 0 8px 0 #fff}\@media (min-width:992px){.tab-panel .redeem-coupon-code{font-size:23px}}.tab-panel .previous-coupon{background:#fff;color:#40026d;width:100%;max-height:150px;overflow-x:hidden;overflow-y:auto}.tab-panel .previous-coupon::-webkit-scrollbar{width:.6em}.tab-panel .previous-coupon::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #000;-webkit-box-shadow:inset 0 0 6px #000}.tab-panel .previous-coupon::-webkit-scrollbar-thumb{background-color:#000;outline:1px solid #000}.tab-panel .previous-coupon ul{list-style:none;margin:0;padding:0}.tab-panel .previous-coupon ul li{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #000}.tab-panel .previous-coupon ul li .coins,.tab-panel .previous-coupon ul li .coupon-code,.tab-panel .previous-coupon ul li .serial-number{border-right:1px solid #000;padding:5px;font-size:18px;text-transform:uppercase}\@media (min-width:992px){.tab-panel .previous-coupon ul li .coins,.tab-panel .previous-coupon ul li .coupon-code,.tab-panel .previous-coupon ul li .serial-number{font-size:20px;padding:10px}}.tab-panel .previous-coupon ul li .coins.heading,.tab-panel .previous-coupon ul li .coupon-code.heading,.tab-panel .previous-coupon ul li .serial-number.heading{font-size:18px}\@media (min-width:992px){.tab-panel .previous-coupon ul li .coins.heading,.tab-panel .previous-coupon ul li .coupon-code.heading,.tab-panel .previous-coupon ul li .serial-number.heading{font-size:27px}}.tab-panel .previous-coupon ul li .serial-number{-ms-flex:0 0 10%;flex:0 0 10%}\@media (min-width:992px){.tab-panel .previous-coupon ul li .serial-number{-ms-flex:0 0 6%;flex:0 0 6%}}.tab-panel .previous-coupon ul li .coupon-code{-ms-flex:0 0 57%;flex:0 0 57%}\@media (min-width:992px){.tab-panel .previous-coupon ul li .coupon-code{-ms-flex:0 0 63%;flex:0 0 63%}}.tab-panel .previous-coupon ul li .coins{-ms-flex:0 0 21%;flex:0 0 21%}\@media (min-width:992px){.tab-panel .previous-coupon ul li .coins{-ms-flex:0 0 24%;flex:0 0 24%}}.tab-panel .points{background:#fff;width:100%;-ms-flex:0 0 100%;flex:0 0 100%;max-height:130px;overflow-x:hidden;overflow-y:auto}.tab-panel .points::-webkit-scrollbar{width:.6em}.tab-panel .points::-webkit-scrollbar-track{box-shadow:inset 0 0 6px #000;-webkit-box-shadow:inset 0 0 6px #000}.tab-panel .points::-webkit-scrollbar-thumb{background-color:#000;outline:1px solid #000}\@media (min-width:992px){.tab-panel .points{max-height:180px;width:50%;-ms-flex:0 0 50%;flex:0 0 50%}}.tab-panel .points ul{list-style:none}.tab-panel .points ul li label{cursor:pointer;position:relative;width:100%;display:block;padding:5px;color:#40026d;font-size:18px;border-bottom:1px solid #000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\@media (min-width:992px){.tab-panel .points ul li label{font-size:27px}}.tab-panel .points ul li label.active,.tab-panel .points ul li label:hover{background:#a7a8aa}.tab-panel .points ul li input{margin:0 5px 0 0;position:absolute;opacity:0;cursor:pointer;height:0;width:0}.tab-panel .points ul li input:checked~.checkmark{background-color:#000}.tab-panel .points ul li input:checked~.checkmark:after{display:block}.tab-panel .points ul li .checkmark{position:absolute;top:calc((100% - 15px) /2);left:20px;height:10px;width:10px;background-color:#fff;border:3px solid #d4264b;border-radius:50%}.tab-panel .points ul li .checkmark:after{content:\"\";position:absolute;display:none}.tab-panel .show{display:-ms-flexbox!important;display:flex!important;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_7;
            }()));
            var VaUtil = exports('va_util', /** @class */ (function () {
                function class_8(hostRef) {
                    registerInstance(this, hostRef);
                    /**
                     * This property can be used by host element to make functionality disabled
                     */
                    this.isDisabled = false;
                    /**
                     * Component state: whether it is minimized by user or not
                     */
                    this.isCollapsed = false;
                    this.openState = false;
                    this.btnClicked = createEvent(this, "btnClicked", 7);
                }
                /**
                 * Exposed method of component
                 */
                class_8.prototype.initMyComponent = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/];
                        });
                    });
                };
                class_8.prototype.toggleState = function () {
                    this.isCollapsed = !this.isCollapsed;
                    this.btnClicked.emit();
                };
                //Before rendering
                class_8.prototype.componentWillLoad = function () {
                    var linkNode = document.createElement("link");
                    linkNode.type = "text/css";
                    linkNode.rel = "stylesheet";
                    linkNode.href = "https://anandprajapati1.github.io/shipDeploy/assets/fonts/font.css";
                    document.head.appendChild(linkNode);
                };
                // //After rendering
                // componentDidLoad() {
                // }
                // //Before updating
                // componentWillUpdate() {
                // }
                // //After updating
                // componentDidUpdate() {
                // }
                // //After unmounting
                // componentDidUnload() {
                // }
                class_8.prototype.popupOpenTrigger = function () {
                    // call pop up show/hide function
                    this.popupElement.openPopup();
                    this.btnClicked.emit();
                };
                class_8.prototype.btnClickedPlay = function () {
                    this.btnClickedTag.playbackRate = 6;
                    this.btnClickedTag.play();
                };
                class_8.prototype.render = function () {
                    var _this = this;
                    return (h("div", { class: "va-util" + (this.isCollapsed ? " collapsed" : "") }, h("audio", { src: "https://anandprajapati1.github.io/shipDeploy/assets/media/btn-click.mp3", ref: function (el) { return _this.btnClickedTag = el; }, class: "hide" }), h("popup-model", { ref: function (el) { _this.popupElement = el; } }), h("div", { class: "content", onClick: this.popupOpenTrigger.bind(this) }, h("p", null, "PLAY GAME WIN COUPONS")), h("button", { class: "btn btn-minimize" + (!this.isCollapsed ? " active" : ""), onClick: this.toggleState.bind(this) }, "-"), h("button", { class: "btn btn-maximize" + (!this.isCollapsed ? "" : " active"), onClick: this.toggleState.bind(this) }, "^")));
                };
                Object.defineProperty(class_8, "style", {
                    get: function () { return ".hide{display:none!important}.va-util{position:fixed;right:20px;bottom:15px;z-index:99999;background:url(https://anandprajapati1.github.io/shipDeploy/assets/img/game-joystic.png);width:100px;height:66px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background-size:contain}\@media (min-width:768px){.va-util{width:200px;height:132px}}.va-util.collapsed{height:18px;bottom:0;background:#5f1f64;border-radius:3px;-ms-flex-pack:start;justify-content:flex-start;padding-left:15px;border-radius:20px 20px 0 0}.va-util.collapsed .content{display:none}.va-util.collapsed .btn-maximize{top:5px;background:none;right:8px}.va-util .content{height:100%;width:100%;padding:9px 15px 30px;-webkit-box-sizing:border-box;box-sizing:border-box;text-shadow:0 0 5px #333;text-align:center;cursor:pointer}\@media (min-width:768px){.va-util .content{padding:17px 30px 55px}}.va-util .content p{color:#fff;font-size:10px;line-height:1.4;font-family:cargoD,Trebuchet MS,Arial,sans-serif;margin:0;padding:0;text-align:center}\@media (min-width:768px){.va-util .content p{font-size:20px;line-height:1.4}}.va-util .btn{display:inline-block;-webkit-box-shadow:none;box-shadow:none;border:0;width:20px;height:20px;color:#fff;border-radius:50%;background:#5f1f64;margin-right:5px;position:absolute;top:-22px;right:0;display:none;cursor:pointer;font-size:20px;line-height:11px}\@media (min-width:768px){.va-util .btn{top:-20px}}.va-util .btn.active{display:inline-block}:focus{outline:none}"; },
                    enumerable: true,
                    configurable: true
                });
                return class_8;
            }()));
        }
    };
});