import { Button, Divider, Modal } from "@arco-design/web-react";
import React from "react";
import "../../styles/modal.css";
import { IconLeft } from "@arco-design/web-react/icon";
//退票申请的四个费用
type Refound = {
  ticketPrice: number;
  servicePrice: number;
  practicalRefound: number;
  practicalInsurancePrice: number;
};
//车票信息
type TrainTicket = {
  date: string;
  destinaction: string;
  train: string;
  departure: string;
  seat: string;
  entrance: string;
  person: string;
  personid: string;
  ticketid: string;
  ticketnumber: string;
  price: number;
  img: string;
};
//存在未处理订单
type Props0 = {
  onOk: (v: boolean) => void;
  visible: boolean;
};
/**
 * 这是一个未处理订单弹窗
 *
 * @param {boolean} visible - 是否可见
 * @param {(v: boolean) => void} onOk - 确认回调
 *
 */
export function NoDealOder({ onOk, visible }: Props0) {
  return (
    <Modal
      visible={visible}
      simple
      closable={true}
      footer={
        <>
          <Button
            type="primary"
            onClick={() => {
              onOk(false);
            }}
            style={{ width: 100, marginBottom: 20 }}
          >
            确定
          </Button>
        </>
      }
    >
      <div className="flex items-center justify-center translate-y-4 mt-5">
        <svg
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4241"
          width="32"
          height="32"
        >
          <path
            d="M549.28 579.584c-2.528 27.584-20.064 40.48-37.376 40.48-12.864 0 0 0 0 0-16.448-3.104-29.216-10.112-34.816-38.016l-22.624-260.8c0-26.208 31.872-49.408 58.912-49.408s56.16 24.256 56.16 50.432L549.28 579.584zM512 654.176c-27.04 0-48.992 21.92-48.992 48.992s21.92 49.024 48.992 49.024 48.992-21.952 48.992-49.024c0-27.04-21.92-48.992-48.992-48.992zM899.808 512c0 214.176-173.6 387.776-387.84 387.776-214.144 0-387.776-173.6-387.776-387.776s173.632-387.808 387.776-387.808c214.208 0 387.84 173.632 387.84 387.808zM828 512c0-174.528-141.472-315.968-316-315.968S196.032 337.472 196.032 512c0 174.496 141.44 315.968 315.968 315.968S828 686.496 828 512z"
            fill="#d81e06"
            p-id="4242"
          ></path>
        </svg>
        <div className="ml-2">
          您还有未处理的订单，请您到{" "}
          <span className="text-bg-blue text-center">我的订单</span> 进行处理!
        </div>
      </div>
    </Modal>
  );
}
//取消订单

type Props1 = {
  onOk: (v: boolean) => void;
  visible: boolean;
  onCancel?: (v: boolean) => void;
};
/**
 * 这是一个取消订单弹窗
 *
 * @param {boolean} visible - 是否可见
 * @param {(v: boolean) => void} onCancel - 返回回调
 * @param {(v: boolean) => void} onOk - 确认回调
 *
 */
export function CancelOrder({ onCancel, onOk, visible }: Props1) {
  return (
    <Modal
      style={{ width: 500 }}
      visible={visible}
      simple
      closable={true}
      footer={
        <>
          <Button
            type="primary"
            onClick={() => {
              onOk(false);
            }}
            style={{ width: 100, marginBottom: 40 }}
          >
            确定
          </Button>
          <Button
            type="secondary"
            onClick={() => {
              onCancel!(false);
            }}
            style={{ width: 100 }}
          >
            取消
          </Button>
        </>
      }
    >
      <div className="flex flex-col items-center justify-center">
        <div className=" self-start text-text-normal pt-5 px-3">
          您确定取消的订单吗
        </div>
        <div className="flex ml-3 items-center justify-center mt-3">
          <svg
            className="icon mr-2"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4241"
            width="64"
            height="64"
          >
            <path
              d="M549.28 579.584c-2.528 27.584-20.064 40.48-37.376 40.48-12.864 0 0 0 0 0-16.448-3.104-29.216-10.112-34.816-38.016l-22.624-260.8c0-26.208 31.872-49.408 58.912-49.408s56.16 24.256 56.16 50.432L549.28 579.584zM512 654.176c-27.04 0-48.992 21.92-48.992 48.992s21.92 49.024 48.992 49.024 48.992-21.952 48.992-49.024c0-27.04-21.92-48.992-48.992-48.992zM899.808 512c0 214.176-173.6 387.776-387.84 387.776-214.144 0-387.776-173.6-387.776-387.776s173.632-387.808 387.776-387.808c214.208 0 387.84 173.632 387.84 387.808zM828 512c0-174.528-141.472-315.968-316-315.968S196.032 337.472 196.032 512c0 174.496 141.44 315.968 315.968 315.968S828 686.496 828 512z"
              fill="#d81e06"
              p-id="4242"
            ></path>
          </svg>
          <div className="text-modal-value">
            一天内3次申请车票成功后取消订单（包含无座票时取消5次计为取消1次），当日将不能在12306继续购票
          </div>
        </div>
      </div>
    </Modal>
  );
}
type Props2 = {
  onOk: (v: boolean) => void;
  visible: boolean;
  onCancel?: (v: boolean) => void;
};
/**
 * 这是一个候补弹窗
 *
 * @param {boolean} visible - 是否可见
 * @param {(v: boolean) => void} onCancel - 返回回调
 * @param {(v: boolean) => void} onOk - 确认回调
 *
 */
//候补订单的弹窗
export function HoubuMessage({ onCancel, onOk, visible }: Props2) {
  return (
    <Modal
      style={{ width: 500, height: 300 }}
      visible={visible}
      simple
      closable={true}
      footer={
        <>
          <Button
            type="primary"
            onClick={() => {
              onOk(false);
            }}
            style={{ width: 100 }}
          >
            网上支付
          </Button>
          <Button
            type="secondary"
            onClick={() => {
              onCancel!(false);
            }}
            style={{ width: 100 }}
          >
            取消
          </Button>
        </>
      }
    >
      <div className="flex flex-col items-center justify-center">
        <div className=" self-start text-text-normal  p-3">提示</div>
        <div className="flex   justify-center items-center mt-3 px-7">
          <svg
            className="icon mr-2 self-start"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4241"
            width="80"
            height="30"
          >
            <path
              d="M549.28 579.584c-2.528 27.584-20.064 40.48-37.376 40.48-12.864 0 0 0 0 0-16.448-3.104-29.216-10.112-34.816-38.016l-22.624-260.8c0-26.208 31.872-49.408 58.912-49.408s56.16 24.256 56.16 50.432L549.28 579.584zM512 654.176c-27.04 0-48.992 21.92-48.992 48.992s21.92 49.024 48.992 49.024 48.992-21.952 48.992-49.024c0-27.04-21.92-48.992-48.992-48.992zM899.808 512c0 214.176-173.6 387.776-387.84 387.776-214.144 0-387.776-173.6-387.776-387.776s173.632-387.808 387.776-387.808c214.208 0 387.84 173.632 387.84 387.808zM828 512c0-174.528-141.472-315.968-316-315.968S196.032 337.472 196.032 512c0 174.496 141.44 315.968 315.968 315.968S828 686.496 828 512z"
              fill="#d81e06"
              p-id="4242"
            ></path>
          </svg>
          <div className="text-modal-value">
            您的候补购票需求截止兑换时间为开车前6小时，兑现成功车票视为已购车票，退改签按既有规则办理。请使用候补订单查询功能及时确认订单状态，交易结果以查询结果为准。
          </div>
        </div>
        <div className=" text-[12px] text-modal-price mt-3  px-7">
          请使用本网站候补订单查询功能及时确认订单状态，交易结果以查询结果为准。如乘车人其他已购车次的车票与候补需求车次行程冲突，系统将为您兑现候补需求，兑现成功车票的退改签规则按既有规则办理。
        </div>
      </div>
    </Modal>
  );
}
//取消候补订单
type Props3 = {
  onOk: (v: boolean) => void;
  visible: boolean;
  onCancel?: (v: boolean) => void;
  price: number;
};
/**
 * 这是一个取消候补弹窗
 * 这个组件接受一个票价作为属性，并在页面上显示。
 * @param {boolean} visible - 是否可见
 * @param {number} price - 票价
 * @param {(v: boolean) => void} onCancel - 返回回调
 * @param {(v: boolean) => void} onOk - 确认回调
 *
 */
export function CancelHouBu({ onCancel, onOk, visible, price }: Props3) {
  return (
    <Modal
      style={{ width: 500, height: 300 }}
      visible={visible}
      simple
      footer={null}
      closable={true}
      onCancel={() => {
        onCancel!(false);
      }}
    >
      <div className="flex flex-col items-start justify-center">
        <div className=" self-start text-text-normal pl-3 pt-3">提示</div>
        <div className="flex  justify-center items-center mt-3 translate-x-10">
          <svg
            className="icon  self-start"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4241"
            width="60"
            height="30"
          >
            <path
              d="M549.28 579.584c-2.528 27.584-20.064 40.48-37.376 40.48-12.864 0 0 0 0 0-16.448-3.104-29.216-10.112-34.816-38.016l-22.624-260.8c0-26.208 31.872-49.408 58.912-49.408s56.16 24.256 56.16 50.432L549.28 579.584zM512 654.176c-27.04 0-48.992 21.92-48.992 48.992s21.92 49.024 48.992 49.024 48.992-21.952 48.992-49.024c0-27.04-21.92-48.992-48.992-48.992zM899.808 512c0 214.176-173.6 387.776-387.84 387.776-214.144 0-387.776-173.6-387.776-387.776s173.632-387.808 387.776-387.808c214.208 0 387.84 173.632 387.84 387.808zM828 512c0-174.528-141.472-315.968-316-315.968S196.032 337.472 196.032 512c0 174.496 141.44 315.968 315.968 315.968S828 686.496 828 512z"
              fill="#d81e06"
              p-id="4242"
            ></path>
          </svg>
          <div className="text-modal-value text-xl">
            您确定要取消该候补订单吗
          </div>
        </div>
        <div className=" text-[12px] text-form mt-3  text-base translate-x-[60px] ">
          应退款: <span className="text-text-orange text-lg">￥{price}</span>
        </div>
        <div className="mt-5 mb-5 text-sm text-modal-price  bg-modal-bg-price translate-x-[60px] px-3 py-1">
          将原额退还到您的预付款
        </div>
        <div className="translate-x-[60px]  mb-3">
          <Button
            type="secondary"
            onClick={() => {
              onOk(false);
            }}
            className="mr-8"
            style={{ width: 100 }}
          >
            取消
          </Button>
          <Button
            type="primary"
            onClick={() => {
              onCancel!(false);
            }}
            style={{ width: 100 }}
          >
            确定
          </Button>
        </div>
        <div className=" mr-auto ml-auto text-xs text-modal-small-font w-[380px]">
          应退款项按银行规定时限退还至购票时所使用的网上支付工具账户，请注意查询，如有疑问请致电12306人工客服查询。
        </div>
      </div>
    </Modal>
  );
}
//退票申请
type Props4 = {
  onOk: (v: boolean) => void;
  visible: boolean;
  onCancel?: (v: boolean) => void;
  refound: Refound;
};
/**
 * 这是一个退票信息弹窗
 * 这个组件接受一个退票信息类型作为属性，并在页面上显示。
 * @param {boolean} visible - 是否可见
 * @param {Refound} refound - 退票信息
 * @param {(v: boolean) => void} onCancel - 返回回调
 * @param {(v: boolean) => void} onOk - 确认回调
 *
 */
export function RefoundTicket({ onCancel, onOk, visible, refound }: Props4) {
  return (
    <Modal
      style={{ width: 560, height: 580 }}
      visible={visible}
      simple
      footer={null}
      closable={true}
      onCancel={() => {
        onCancel!(false);
      }}
    >
      <div className="flex flex-col items-start justify-center ">
        <div className=" self-start text-text-normal pl-3 pt-3">退票申请</div>
        <div className="flex  justify-center items-center mt-5 translate-x-10">
          <svg
            className="icon  self-start"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4241"
            width="60"
            height="30"
          >
            <path
              d="M549.28 579.584c-2.528 27.584-20.064 40.48-37.376 40.48-12.864 0 0 0 0 0-16.448-3.104-29.216-10.112-34.816-38.016l-22.624-260.8c0-26.208 31.872-49.408 58.912-49.408s56.16 24.256 56.16 50.432L549.28 579.584zM512 654.176c-27.04 0-48.992 21.92-48.992 48.992s21.92 49.024 48.992 49.024 48.992-21.952 48.992-49.024c0-27.04-21.92-48.992-48.992-48.992zM899.808 512c0 214.176-173.6 387.776-387.84 387.776-214.144 0-387.776-173.6-387.776-387.776s173.632-387.808 387.776-387.808c214.208 0 387.84 173.632 387.84 387.808zM828 512c0-174.528-141.472-315.968-316-315.968S196.032 337.472 196.032 512c0 174.496 141.44 315.968 315.968 315.968S828 686.496 828 512z"
              fill="#d81e06"
              p-id="4242"
            ></path>
          </svg>
          <div className="text-modal-value flex flex-col mb-3">
            <div className="text-modal-value text-xl">您确定要退票吗</div>
            <div className="text-form text-sm">
              如有定餐饮或特产，请按规定到网站自行办理退订
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className=" text-[12px] text-form mt-3  text-base translate-x-[60px] ">
            应退款:{" "}
            <span className="text-text-orange text-lg">
              ￥
              {refound!.practicalInsurancePrice +
                refound!.practicalRefound -
                refound!.servicePrice}
            </span>
          </div>
          <div className=" text-[12px] text-ticket-price mt-3  text-sm  translate-x-[60px] mb-1">
            手续费用:{refound?.servicePrice}元
            （当前时间退票费按照5%收取，核收计为2元）
          </div>
          <div className=" text-[12px] text-ticket-price  text-sm  translate-x-[60px] mb-1">
            车票票价:{refound?.ticketPrice}元
          </div>
          <div className=" text-[12px] text-ticket-price text-sm  translate-x-[60px] mb-1">
            应退票款:{refound?.practicalRefound}元
          </div>
          <div className=" text-[12px] text-ticket-price  text-sm  translate-x-[60px] mb-1">
            应退保险费:{refound?.practicalInsurancePrice}元
          </div>
        </div>

        <div className="mt-5 mb-8 text-sm text-modal-price  bg-modal-bg-price translate-x-[60px] px-5 py-3 w-[380px]">
          实际核收退票费及应退票款将按最终交易时间计算
          <br />
          如你需要办理该次列车，后续退票业务，请于退票车次票面开车时间前办理。
        </div>
        <div className="translate-x-[60px]  mb-3">
          <Button
            type="secondary"
            onClick={() => {
              onOk(false);
            }}
            className="mr-8"
            style={{ width: 100 }}
          >
            取消
          </Button>
          <Button
            type="primary"
            onClick={() => {
              onCancel!(false);
            }}
            style={{ width: 100 }}
          >
            确定
          </Button>
        </div>
        <div className="translate-x-[60px]  text-xs text-modal-small-font w-[380px] mt-6">
          应退款项按银行规定时限退还至购票时所使用的网上支付工具账户，请注意查询，如有疑问请致电12306人工客服应退款项按银行规定时限退还至购票时所使用的网上支付工具账户，请注意查询，如有疑问请致电12306人工客服应退款项按银行规定时限退还至购票时所使用的网上支付工具账户，请注意查询，如有疑问请致电12306人工客服
        </div>
      </div>
    </Modal>
  );
}

type Props5 = {
  onCancel: (v: boolean) => void;
  visible: boolean;
  ticket: TrainTicket;
};
/**
 * 这是一个火车票信息弹窗
 * 这个组件接受一个火车票类型作为属性，并在页面上显示。
 * @param {boolean} visible - 是否可见
 * @param {TrainTicket} ticket - 火车票
 * @param {(v: boolean) => void} onCancel - 返回回调
 *
 */
export function Ticket({ ticket, onCancel, visible }: Props5) {
  return (
    <Modal
      style={{ width: 650, height: 500 }}
      visible={visible}
      simple
      footer={null}
    >
      <Button
        type="secondary"
        icon={<IconLeft />}
        className="rounded-full ml-5 mt-5"
        onClick={() => {
          onCancel(false);
        }}
      ></Button>
      <div className=" text-center text-text-normal text-lg">行程信息提醒</div>
      <div className="flex justify-between">
        <div className="flex flex-col pt-5 px-5 translate-x-10">
          <div className=" text-text-normal text-base mb-3">
            开车时间 <span className="text-date text-sm">{ticket.date}</span>
          </div>
          <div className="flex justify-between w-[350px] mb-3">
            <div className="text-date text-base">
              <span className="text-bg-blue text-2xl">{ticket.departure}</span>{" "}
              站
            </div>
            <div className=" border-b-2 border-text-color text-base text-text-color w-[80px] text-center">
              {ticket.train}
              <svg
                className="icon translate-x-[75px] absolute translate-y-[-4px]"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="23067"
                width="16"
                height="16"
              >
                <path
                  d="M256 232l552 552H256z"
                  fill="#8E939E"
                  p-id="23068"
                ></path>
              </svg>
            </div>
            <div className="text-date text-base">
              <span className="text-bg-blue text-2xl">
                {ticket.destinaction}
              </span>{" "}
              站
            </div>
          </div>
          <div className="flex justify-between mb-7">
            <div className="text-form text-xs ">{ticket.seat}</div>
            <div className="text-form text-xs">检票口：{ticket.entrance}</div>
          </div>
          <div className="text-text-normal text-base mb-2">
            {ticket.person}{" "}
            <span className="bg-ticket-person-bg text-bg-blue text-xs p-1">
              乘车人
            </span>
          </div>
          <div className="text-modal-price text-sm">{ticket.personid}</div>
          <div className="mt-5">
            <span className="text-modal-price text-xs mr-5">
              订单号：{ticket.ticketid}
            </span>
            <span className="text-modal-price text-xs">
              电子编号：{ticket.ticketnumber}
            </span>
          </div>
        </div>
        <div className="flex flex-col mr-10 mt-5">
          <img src={ticket.img} alt="" className="w-[90px] h-[90px]" />
          <div style={{ color: "#586072E5" }} className="mb-10">
            电子售票二维码
          </div>
          <div className="text-modal-value text-sm">票价：{ticket.price}</div>
        </div>
      </div>
      <Divider />
      <div className="text-center text-text-noselect text-base">温馨提示</div>
      <div className="mr-auto ml-auto px-10 text-xs text-modal-small-font w-[500px]">
        应退款项按银行规定时限退还至购票时所使用的网上支付工具账户，请注意查询，如有疑问请致电12306人工客服应退款项按银行规定时限退还至购票时所使用的网上支付工具账户，请注意查询，如有疑问请致电12306人工客服应退款项按银行规定时限退还至购票时所使用的网上支付工具账户，请注意查询，如有疑问请致电12306人工客服
      </div>
    </Modal>
  );
}
