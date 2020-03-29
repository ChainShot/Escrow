import {ethers} from 'ethers';
import deploy from './deploy';
import addContract from './addContract';
import "./index.css";

let contracts = 0;
async function newContract() {
  const beneficiary = document.getElementById("beneficiary").value;
  const arbiter = document.getElementById("arbiter").value;
  const value = ethers.utils.bigNumberify(document.getElementById("wei").value);
  const contract = await deploy(beneficiary, arbiter, value);
  addContract(++contracts, contract, beneficiary, arbiter, value);
}

document.getElementById("deploy").addEventListener("click", newContract);
