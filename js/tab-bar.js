export default class TabBar {
    /**
     * Создает объект.
     * @param {{ element: HTMLElement, tabs: Tab[], onChange: Function }} args
     */
    constructor({ element, tabs, onChange }) {
        this._tabBar = element;
        this._tabs = tabs;
        this._onChange = onChange;

        this.init();
    }

    /**
     * Инициализирует объект.
     * Устанавливает обработчик для обработки активации вкладки.
     * @private
     */
    init() {
        this._tabs.forEach(tab => tab.onActivate = this.handleActivate.bind(this));
    }

    /**
     * Возвращает HTML элемент.
     * @returns {HTMLElement}
     */
    get element() { 
        return this._tabBar;
     }

    /**
     * Возвращает массив вкладок.
     * @returns {Tab[]}
     */
    get tabs() { 
        return this._tabs;
     }

    /**
     * Возвращает активную вкладку.
     * @returns {Tab}
     */
    get activeTab() { 
        return this._tabs.find(tab => tab.isActive);
    }

    /**
     * Возвращает индекс активной вкладки.
     * @returns {number}
     */
    get activeTabIndex() { 
        return this._tabs.findIndex(tab => tab.isActive);
     }

    /**
     * Вызывается при активации вкладки.
     * Делает все вкладки кроме активной неактивными.
     * Вызывает функцию обратно вызова, отправляя туда активную вкладку.
     * @private
     * @param {Tab} activeTab 
     */
    handleActivate(activeTab) {
        this._tabs.forEach(tab => {
            if (tab !== activeTab) {
                tab.isActive = false;
            }
        });

        this._onChange(activeTab);
    }
}