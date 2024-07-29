const ssid = "ga";
const name = "nextdns";
let home = ($network.wifi.ssid === ssid);

const getModuleStatus = new Promise((resolve) => {
  $httpAPI("GET", "v1/modules", null, (data) =>
	  resolve(data.enabled.includes(name))
  );
});

getModuleStatus.then((enabled) => {
  if (home && enabled) {
    //在家，卻啟用模組 => 關閉
	enableModule(false);
  } else if (!home && !enabled) {
	//不在家，沒啟用模組 => 啟用
	enableModule(true);
  } else {
	//其他情況 => 重複觸發 => 結束腳本
	//$notification.post("重複觸發", "", "");
	$done();
  }
});

function enableModule(status) {
  $httpAPI("POST", "v1/modules", { [name]: status }, () => $done());
}
