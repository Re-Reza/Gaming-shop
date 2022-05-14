import React from 'react';

export function TrustPanel(){

    return(
        <div className="trust-panel">
            <div className="trust-panel-item">
                <i class="fa fa-percent" aria-hidden="true"></i>
                Best price
            </div>
            <div className="trust-panel-item">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                Safe &amp; reliable
            </div>
            <div className="trust-panel-item">
                <i class="fa fa-comments-o" aria-hidden="true"></i>
                24 Hours support
            </div>
            <div className="trust-panel-item">
                <i class="fa fa-bolt" aria-hidden="true"></i>
                Fastest delivery
            </div>
        </div>
    )
}