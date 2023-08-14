"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = exports.OrderExecutionReportStatus = exports.OrderType = exports.OrderDirection = void 0;
const Core_1 = require("../Core");
/**
 * Направление операции
 */
var OrderDirection;
(function (OrderDirection) {
    /**
     * Значение не указано
     */
    OrderDirection[OrderDirection["ORDER_DIRECTION_UNSPECIFIED"] = 0] = "ORDER_DIRECTION_UNSPECIFIED";
    /**
     * Покупка
     */
    OrderDirection[OrderDirection["ORDER_DIRECTION_BUY"] = 1] = "ORDER_DIRECTION_BUY";
    /**
     * Продажа
     */
    OrderDirection[OrderDirection["ORDER_DIRECTION_SELL"] = 2] = "ORDER_DIRECTION_SELL";
})(OrderDirection || (exports.OrderDirection = OrderDirection = {}));
/**
 * Тип заявки
 */
var OrderType;
(function (OrderType) {
    /**
     * Значение не указано
     */
    OrderType[OrderType["ORDER_TYPE_UNSPECIFIED"] = 0] = "ORDER_TYPE_UNSPECIFIED";
    /**
     * Лимитная
     */
    OrderType[OrderType["ORDER_TYPE_LIMIT"] = 1] = "ORDER_TYPE_LIMIT";
    /**
     * Рыночная
     */
    OrderType[OrderType["ORDER_TYPE_MARKET"] = 2] = "ORDER_TYPE_MARKET";
    /**
     * Лучшая цена
     */
    OrderType[OrderType["ORDER_TYPE_BESTPRICE"] = 3] = "ORDER_TYPE_BESTPRICE";
})(OrderType || (exports.OrderType = OrderType = {}));
/**
 * Текущий статус заявки (поручения)
 */
var OrderExecutionReportStatus;
(function (OrderExecutionReportStatus) {
    /**
     * none
     */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_UNSPECIFIED"] = 0] = "EXECUTION_REPORT_STATUS_UNSPECIFIED";
    /**
     * Исполнена
     */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_FILL"] = 1] = "EXECUTION_REPORT_STATUS_FILL";
    /**
     * Отклонена
     */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_REJECTED"] = 2] = "EXECUTION_REPORT_STATUS_REJECTED";
    /**
     * Отменена пользователем
     */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_CANCELLED"] = 3] = "EXECUTION_REPORT_STATUS_CANCELLED";
    /**
     * Новая
     */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_NEW"] = 4] = "EXECUTION_REPORT_STATUS_NEW";
    /**
     * Частично исполнена
     */
    OrderExecutionReportStatus[OrderExecutionReportStatus["EXECUTION_REPORT_STATUS_PARTIALLYFILL"] = 5] = "EXECUTION_REPORT_STATUS_PARTIALLYFILL";
})(OrderExecutionReportStatus || (exports.OrderExecutionReportStatus = OrderExecutionReportStatus = {}));
/**
 * Сервис предназначен для работы с торговыми поручениями:
 * 1. выставление;
 * 2. отмена;
 * 3. получение статуса;
 * 4. расчёт полной стоимости;
 * 5. получение списка заявок.
 */
class OrdersService extends Core_1.Core {
    GetOrders(body) {
        return this.request('OrdersService', 'GetOrders', body);
    }
}
exports.OrdersService = OrdersService;