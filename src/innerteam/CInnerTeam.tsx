import { CUqBase } from "uq-app";
import { VInnerTeam } from "./VInnerTeam";
import { VInnerTeamDetail, VInnerTeamMemberYearly } from "./VInnerTeamDetail";
import { observable } from "mobx";
import { QueryPager, nav } from "tonva-react";
import moment from 'moment';
import { VInnerPersonDetail } from "./VInnerPersonDetail";
import { VInnerTeamDailyDetail } from "./VInnerTeamDailyDetail";

export class CInnerTeam extends CUqBase {

    //初始化
    @observable myTodayAchievement: any[];
    @observable teamAchievementDay: any[];
    @observable teamAchievementYear: any[];

    protected async internalStart() {
        let today = moment().format('YYYY-MM-DD');
        this.myTodayAchievement = await this.searchPersonAchievment(today);
        this.teamAchievementDay = await this.searchTeamAchievementDay({ team: 0, date: today });
        let thisYear = moment().format('YYYY');
        await this.searchTeamAchievementYear(thisYear);
        await this.openVPage(VInnerTeam, thisYear);
    }

    showMyAchievementDetail = () => {
        this.openVPage(VInnerPersonDetail);
    }

    /**
     * 我的每天工作量
    */
    searchPersonAchievment = async (date: any) => {
        let { uqs } = this;
        let { id } = nav.user;
        return await uqs.JkseSalesTask.GetPersonDailyAchieve.table({ user: id, date: date });
    }

    /**
     * 我的每个月工作量
    */
    getPersonAchievmentMonth = async (param: any) => {
        let { uqs } = this;
        let { id } = nav.user;
        let { month, year } = param;
        return await uqs.JkseSalesTask.GetPersonMonthlyAchieve.table({ user: id, year: year, month: month });
    }

    /**
     * 我的每年的工作量
    */
    getPersonAchievmentYear = async (year: any) => {
        let { uqs } = this;
        let { id } = nav.user;
        return await uqs.JkseSalesTask.GetPersonYearlyAchieve.table({ user: id, year: year });
    }

    /**
     *团队所有人每天汇总
    */
    searchTeamAchievementDay = async (param: any) => {
        let { uqs } = this;
        let { team, date } = param;
        return await uqs.JkseSalesTask.GetTeamDailyAchieve.table({ team: team, date: date });
    }

    showTeamDailyDetail = async (param: any) => {
        let { team, date } = param;
        let nowDate = dateFormat(date);
        let newParam = { team, date: nowDate };
        let teamDailyDetail = await this.searchTeamAchievementDay(newParam);
        this.openVPage(VInnerTeamDailyDetail, { date, teamDailyDetail });
    };

    /**
     * 团队某年按月汇总量
    */
    searchTeamAchievementYear = async (year: any) => {

        this.teamAchievementYear = await this.uqs.JkseSalesTask.GetTeamYearlyAchieve.table({ team: 0, year: year });
    }

    /**
     * 团队某年某月每人汇总量
    */
    getTeamMonthDetail = async (param: any) => {
        let { uqs, cApp } = this;
        let { yeara, montha } = param;
        return await uqs.JkseSalesTask.GetTeamMonthlyAchieve.table({ team: 0, year: yeara, month: montha });
    }

    showTeamDetail = async (yeara: any, montha: any) => {
        let teamAchievementMonthDetail = await this.getTeamMonthDetail({ yeara, montha })
        this.openVPage(VInnerTeamDetail, { montha, yeara, teamAchievementMonthDetail });
    };

    /**
     * 团队每年每人汇总
    */
    getTeamMemberYearlyAchieve = async (yeara: any) => {
        let { uqs } = this;
        return await uqs.JkseSalesTask.GetTeamMemberYearlyAchieve.table({ team: 0, year: yeara });
    };

    showTeamMemberYearlyAchieve = async (yeara: any) => {
        let teamMemberYearlyDetail = await this.getTeamMemberYearlyAchieve(yeara)
        this.openVPage(VInnerTeamMemberYearly, { yeara, teamMemberYearlyDetail });
    };
}

export function dateFormat(dateData: any) {
    let date = new Date(dateData)
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDate()
    let month = m < 10 ? ('0' + m) : m
    let day = d < 10 ? ('0' + d) : d
    const time = y + '-' + month + '-' + day
    return time
}