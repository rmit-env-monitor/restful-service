#include <nan.h>

double calculate(double AQI_high, double AQI_low, double brpt_high, double brpt_low, double cctt) {
    double AQI_up = AQI_high - AQI_low;
    double brpt_down = brpt_high - brpt_low;
    double result = (AQI_up / brpt_down) * (cctt - brpt_low) + AQI_low;
    return (int)result;
}

void calculateSO2(const Nan::FunctionCallbackInfo<v8::Value>& info) {
    double cctt = info[0]->NumberValue();
    double AQI_high = 0;
    double AQI_low = 0;
    double brpt_high = 0;
    double brpt_low = 0;

    if (cctt >= 0 && cctt <= 35) {
        AQI_high = 50;
        AQI_low = 0;
        brpt_high = 35;
        brpt_low = 0;
    } else if (cctt >= 36 && cctt <= 75) {
        AQI_high = 100;
        AQI_low = 50;
        brpt_high = 75;
        brpt_low = 36;
    } else if (cctt >= 76 && cctt <= 185) {
        AQI_high = 150;
        AQI_low = 101;
        brpt_high = 185;
        brpt_low = 76;
    } else if (cctt >= 186 && cctt <= 304) {
        AQI_high = 200;
        AQI_low = 151;
        brpt_high = 304;
        brpt_low = 186;
    } else if (cctt >= 305 && cctt <= 604) {
        AQI_high = 300;
        AQI_low = 201;
        brpt_high = 604;
        brpt_low = 305;
    } else if (cctt >= 605 && cctt <= 804) {
        AQI_high = 400;
        AQI_low = 301;
        brpt_high = 804;
        brpt_low = 605;
    } else {
        AQI_high = 500;
        AQI_low = 401;
        brpt_high = 1004;
        brpt_low = 805;
    }

    info.GetReturnValue().Set(calculate(AQI_high, AQI_low, brpt_high, brpt_low, cctt));
}

void Init(v8::Local<v8::Object> exports) {
    exports->Set(Nan::New("calculateSO2").ToLocalChecked(),
        Nan::New<v8::FunctionTemplate>(calculateSO2)->GetFunction());
}

NODE_MODULE(addon, Init)