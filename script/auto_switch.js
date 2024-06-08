const proxyGroupName = "🚀 PROXY"; // Proxy group name
const primaryPolicy = "🚗 AUTO"; // Primary policy group
const secondaryPolicy = "🇺🇸 US"; // Secondary policy group
const testURL = "http://cp.cloudflare.com/generate_204"; // URL for testing connectivity

// Check the connectivity of the primary policy group
function testPrimaryPolicy() {
  $httpClient.get(testURL, function (error, response) {
    if (error || response.status !== 200) {
      // If the test fails, switch to the secondary policy group
      switchPolicy(secondaryPolicy);
    } else {
      // If the test succeeds, stay on the primary policy group
      switchPolicy(primaryPolicy);
    }
  });
}

// Switch policy group
function switchPolicy(policyName) {
  $surge.setSelectGroupPolicy(proxyGroupName, policyName);
}

// Periodically perform policy group checks
testPrimaryPolicy();
